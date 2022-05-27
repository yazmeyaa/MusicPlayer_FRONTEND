import { combineReducers } from 'redux';
import { PlayerReducer } from './PlayerReducer';
import { UserState } from './UserReducer';

export const RootReducer = combineReducers({
  PlayerState: PlayerReducer,
  UserState: UserState,
});
