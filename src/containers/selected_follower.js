import React, { Component } from 'react';
import { connect } from 'react-redux';

class Current extends Component {

    render() {
        if (!this.props.selectedFollower) {
            return (
                <div></div>
            );
        }
        if (!this.props.selectedFollower.location&&!this.props.selectedFollower.company) {
            this.props.selectedFollower.location = 'Неизвестно';
            this.props.selectedFollower.company = 'Неизвестно';
        } else if (!this.props.selectedFollower.company) {
            this.props.selectedFollower.company = 'Неизвестно';
        } else if (!this.props.selectedFollower.location) {
            this.props.selectedFollower.location = 'Неизвестно';
        }
        return (
            <div className="follower-detail col-md-8">
                <img src={this.props.selectedFollower.avatar_url} alt="John Doe" className="mr-3 mt-3 rounded-circle" />
                <div className="details">
                    <div className="company">Название компании: {this.props.selectedFollower.company}</div>
                    <div className="login">Логин: {this.props.selectedFollower.login}</div>
                    <div className="numberR">Количество репозиториев: {this.props.selectedFollower.public_repos
                    }</div>
                    <div className="location">Место нахождения: {this.props.selectedFollower.location}</div>
                    <div className="numberF">Количество подписчиков: {this.props.selectedFollower.followers}</div>
                    <div className="created_date">Дата создания: {this.props.selectedFollower.created_at}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ selectedFollower }) {
    return {
        selectedFollower
    };
}

export default connect(mapStateToProps)(Current);