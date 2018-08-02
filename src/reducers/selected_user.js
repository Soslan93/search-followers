import { FETCH_FOLLOWER, SELECT_FOLLOWER } from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_FOLLOWER:
            return action.payload.data[0];
        case SELECT_FOLLOWER:
            return action.payload.data;
    }
    return state;
}