import { Dispatch } from "react"
import {PlayerActionTypes, PlayerActions} from '../actions/PlayerActions'

export const ChangeCurrentSong = (URL:string) => {
    return async (dispatch: Dispatch<PlayerActionTypes>) => {
            dispatch({type: PlayerActions.ChangeCurrentSong, payload: URL})
    }
}

export const ChangeCurrentSongDuration = (duration: number) => {
    return async (dispatch: Dispatch<PlayerActionTypes>) => {
        dispatch({type: PlayerActions.ChangeCurrentSongDuration, payload: duration})
    }
}

export const ChangeCurrentSongTime = (time: number) => {
    return async (dispatch: Dispatch<PlayerActionTypes>) => {
        dispatch({type: PlayerActions.ChangeCurrentSongTime, payload: time})
    }
}

export const ChangePlayStatus = () => {
    return async (dispatch: Dispatch<PlayerActionTypes>) => {
        dispatch({type:PlayerActions.ChangePlayerStatus})
    }
}