import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users/';

export const FETCH_FOLLOWER = 'FETCH_FOLLOWER';

export const SELECT_FOLLOWER = 'SELECT_FOLLOWER';

export function fetchFollower(username) {
    const url = `${ROOT_URL}${username}/followers`;
    const request = axios.get(url);
    return {
        type: FETCH_FOLLOWER,
        payload: request
    }
}

export function selectFollower(url) {

    const select = `${url}`;
    const request = axios.get(select);

    return {
        type: SELECT_FOLLOWER,
        payload: request
    }
}