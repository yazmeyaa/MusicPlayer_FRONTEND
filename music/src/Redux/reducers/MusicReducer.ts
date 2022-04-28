import { PlayerActions, PlayerActionTypes as Actions } from '../actions/PlayerActions'
import { StateType } from '../types/PlayerTypes'

export const initialState: StateType = {
    currentPlayingSongURL: null,
    play: false,
    songCurrentTime: 0,
    songDuration: 0,
    songList: [],
    loading: false,
    error: null
}

export const PlayerReducer = (state = initialState, action: Actions): StateType => {
    switch(action.type){
        case PlayerActions.ChangeCurrentSong: {
            return {...state, currentPlayingSongURL: action.payload}
        }
        case PlayerActions.ChangePlayerStatus: {
            return {...state, play: !state.play}
        }
        case PlayerActions.ChangeCurrentSongTime: {
            return {...state, songCurrentTime: action.payload}
        }
        case PlayerActions.ChangeCurrentSongDuration: {
            return {...state, songDuration: action.payload}
        }
        case PlayerActions.FetchSongList: {
            return {...state, loading: true}
        }
        case PlayerActions.FetchSongListError: {
            return {...state, loading: false, error: action.payload}
        }
        case PlayerActions.FetchSongListSuccess: {
            return {...state, loading: false, songList: action.payload}
        }
        case PlayerActions.ClearError: {
            return {...state, error: null}
        }
        default: {
            return state
        }
    }
}