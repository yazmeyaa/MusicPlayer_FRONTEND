import { combineReducers } from "redux";
import {PlayerReducer} from './PlayerReducer'
import {MouseStates} from './MouseStatesReducer'

export const RootReducer = combineReducers({
    PlayerState: PlayerReducer,
    MouseState: MouseStates,
})