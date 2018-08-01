import React from 'react';

const FollowerDetail = ({ follower }) => {
    if (!follower) {
        return <div>Loading...</div>
    }
    if (!follower.company) {
        follower.company = "неизввестно";
    } else if (!follower.location) {
        follower.location = "неизвестно";
    }
    return (
        <div className="follower-detail col-md-8">
            <img src={follower.avatar_url} alt="John Doe" className="mr-3 mt-3 rounded-circle" />
            <div className="details">
                <div className="company">Название компании: {follower.company}</div>
                <div className="login">Логин: {follower.login}</div>
                <div className="numberR">Количество репозиториев: {follower.public_repos}</div>
                <div className="location">Место нахождения: {follower.location}</div>
                <div className="numberF">Количество подписчиков: {follower.followers}</div>
                <div className="created_date">Дата создания: {follower.created_at}</div>
            </div>
        </div>
    );
};

export default FollowerDetail;