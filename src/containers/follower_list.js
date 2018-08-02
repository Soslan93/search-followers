import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowerListItem from '../components/follower_list_item';

class FollowerList extends Component {
    renderFollowers(followerData) {
        return (
            <li key={followerData.id} className="list-group-item">
                <div className="follower-list media">
                    <div className="media-left">
                        <img className="media-object" src={followerData.avatar_url} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{followerData.login}</div>
                    </div>

                </div>
            </li>
        );
    }

    render() {
        return (
            <ul className="col-md-4 list group">
                {this.props.follower.map(this.renderFollowers)}
            </ul>
        );
    }
}

function mapStateToProps({ follower }) {
    return { follower };
}

export default connect(mapStateToProps)(FollowerList);