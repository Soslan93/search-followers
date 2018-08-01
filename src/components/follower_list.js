import React from 'react';
import FollowerListItem from './follower_list_item';

const FollowerList = (props) => {
    const followerItems = props.followers.map((follower) => {
        return (
            <FollowerListItem 
            onFollowerSelect={props.onFollowerSelect}
            key={follower.id} 
            follower={follower} />
        );
    });
    return (
        <ul className="col-md-4 list group">
            {followerItems}
        </ul>
    );
}

export default FollowerList;