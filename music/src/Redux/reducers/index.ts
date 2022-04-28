import { combineReducers } from "redux";
import {PlayerReducer} from './MusicReducer'
import {MouseCords} from './MouseCords'

export const RootReducer = combineReducers({
    PlayerState: PlayerReducer,
    MouseCoordinates: MouseCords
})