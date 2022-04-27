import { combineReducers } from "redux";
import {MusicReducer} from './MusicReducer'
import {MouseCords} from './MouseCords'

export const RootReducer = combineReducers({
    PlayerReducer: MusicReducer,
    MouseCoordinates: MouseCords
})