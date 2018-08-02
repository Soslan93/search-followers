import { combineReducers } from 'redux';
import FolloweReducer from './reducer_follower';
import SelectedReducer from './selected_user';

const rootReducer = combineReducers({
  follower: FolloweReducer,
  selectedFollower: SelectedReducer
});

export default rootReducer;
