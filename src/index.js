import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import FollowerList from './components/follower_list';
import FollowerDetail from './components/follower_detail';
import SortFollowers from './components/sort_followers_list';
import _ from 'lodash';
// создаем новую компоненту. Эта компонента производит html
class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      followers: [],
      noSort: [],
      sort: [],
      selectedFollower: null
    };

    this.followerSearch('Soslan93');
  }
  /** Функция получает подписчиков */
  follow(foll) {
    fetch(`${foll}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          followers: data,
          noSort: data
        });
      })
  }
  /** Функция получает основную информацию о пользователе по логину, после получает список подписчиков */
  followerSearch(term) {
    fetch(`https://api.github.com/users/${term}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          selectedFollower: data
        });
        return this.follow(data.followers_url);
      })
      .catch(error => console.error(error))
  }
  /** Функция получения выбранного подписчика */
  followerSelected(follower_url) {
    fetch(`${follower_url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          selectedFollower: data
        });
      })
      .catch(error => console.error(error))
  }

  /**Сортировка по подписчикам */
  

  render() {
    const followerSearch = _.debounce((term) => { this.followerSearch(term) }, 300);
    const followerSelected = _.debounce((selectedFollower) => { this.followerSelected(selectedFollower) }, 300);
    const sortFollowers = _.debounce(sort => {
      return this.setState({
        sort: this.state.followers.filter(foll => foll.login.toLowerCase().indexOf(sort.toLowerCase()) > -1 ),
        followers: sort === '' ? this.state.noSort : this.state.sort
      })
    });
    
    return (
      <div>
        <SearchBar onSearchTermChange={followerSearch} />
        <SortFollowers onSortChange={sortFollowers} />
        <FollowerDetail follower={this.state.selectedFollower} />
        <FollowerList
          onFollowerSelect={followerSelected}
          followers={this.state.followers} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
