import React, { Component } from 'react';

class SortFollowers extends Component {
    constructor(props) {
        super(props);

        this.state = { follower: '' };
    }
    render() {
        return (
            <div className="sort-followers">
                <input
                    value={this.state.follower}
                    onChange={event => this.onInputChange(event.target.value)} placeholder="Поиск и сортировка по списку подписчиков"/>
            </div>
        );
    }

    onInputChange(follower) {
        this.setState({ follower });
        this.props.onSortChange(follower)
    }
}

export default SortFollowers;