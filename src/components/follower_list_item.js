import React from 'react';

const FollowerListItem = ({ follower, onFollowerSelect }) => {
    const imageUrl = follower.avatar_url;
    return (
        /** вещаем обработчик события на item, чтобы получить подробную информацию о выбранном подписчике */
        <li onClick={()=>onFollowerSelect(follower.url)} className="list-group-item">
            <div className="follower-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{follower.login}</div>
                </div>

            </div>
        </li>
    );
};

export default FollowerListItem;