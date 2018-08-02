import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import FollowerList from '../containers/follower_list';
import Current from '../containers/selected_follower';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Current />
        <FollowerList />
      </div>
    );
  }
}
