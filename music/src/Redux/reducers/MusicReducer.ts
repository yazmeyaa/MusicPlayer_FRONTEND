import { PlayerActions, PlayerActionTypes as Actions } from '../actions/PlayerActions'

interface StateType{
    currentPlayingSongURL: string | null
    play: boolean
    songCurrentTime: number
    songDuration: number
}

export const initialState: StateType = {
    currentPlayingSongURL: null,
    play: false,
    songCurrentTime: 0,
    songDuration: 0
}

export const MusicReducer = (state = initialState, action: Actions): StateType => {
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
        default: {
            return state
        }
    }
}