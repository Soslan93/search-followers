import { FETCH_FOLLOWER } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_FOLLOWER:
        console.log(action);
            return action.payload.data;
    }
    return state;
}