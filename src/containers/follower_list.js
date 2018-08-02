import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFollower } from '../actions/index';
import { bindActionCreators } from "redux";

class FollowerList extends Component {
    constructor(props) {
        super(props);

        self = this;
    }
    renderFollowers(followerData) {
        return (
            <li key={followerData.id} onClick={() => self.props.selectFollower(followerData.url)} className="list-group-item">
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

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ selectFollower }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerList);