import { combineReducers } from "redux";
import {PlayerReducer} from './PlayerReducer'
import {MouseStates} from './MouseStatesReducer'
import { MouseCoordinatesReducer } from "./MouseCoordinates";

export const RootReducer = combineReducers({
    PlayerState: PlayerReducer,
    MouseState: MouseStates,
    MouseCoordinates: MouseCoordinatesReducer
})