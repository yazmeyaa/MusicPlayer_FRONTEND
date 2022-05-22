import { RecievedData } from "../types/PlayerTypes"

export enum PlayerActions{
    ChangeCurrentSong = 'ChangeCurrentSong',
    ChangePlayerStatus = 'ChangePlayerStatus',
    ChangeCurrentSongDuration = 'ChangeCurrentSongDuration',
    ChangeCurrentSongTime = 'ChangeCurrentSongTime',
    FetchSongList = 'FetchSongList',
    FetchSongListError = 'FetchSongListError',
    FetchSongListSuccess = 'FetchSongListSuccess',
    ClearError = 'ClearError'
}

type ChangeCurrentSong = {
    type: PlayerActions.ChangeCurrentSong,
    payload: string | null
}

type ChangePlayerStatus = {
    type: PlayerActions.ChangePlayerStatus,
}

type ChangeCurrentSongDuration = { 
    type: PlayerActions.ChangeCurrentSongDuration,
    payload: number
}

type ChangeCurrentSongTime = {
    type: PlayerActions.ChangeCurrentSongTime,
    payload: number
}

type FetchSongList = {
    type: PlayerActions.FetchSongList
}

type FetchSongListError = {
    type: PlayerActions.FetchSongListError,
    payload: string
}

type FetchSongListSucces = {
    type: PlayerActions.FetchSongListSuccess,
    payload: Array<RecievedData>
}

type ClearError = {
    type: PlayerActions.ClearError,
} 


export type PlayerActionTypes = ChangeCurrentSong | ChangePlayerStatus | ChangeCurrentSongDuration | ChangeCurrentSongTime | FetchSongList | FetchSongListError | FetchSongListSucces | ClearError
