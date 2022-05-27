import { combineReducers } from 'redux';
import { PlayerReducer } from './PlayerReducer';
import { MouseStates } from './MouseStatesReducer';
import { UserState } from './UserReducer';

export const RootReducer = combineReducers({
  PlayerState: PlayerReducer,
  MouseState: MouseStates,
  UserState: UserState,
});
