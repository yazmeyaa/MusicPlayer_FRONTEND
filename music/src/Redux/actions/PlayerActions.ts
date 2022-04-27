export enum PlayerActions{
    ChangeCurrentSong = 'ChangeCurrentSong',
    ChangePlayerStatus = 'ChangePlayerStatus',
    ChangeCurrentSongDuration = 'ChangeCurrentSongDuration',
    ChangeCurrentSongTime = 'ChangeCurrentSongTime'
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


export type PlayerActionTypes = ChangeCurrentSong | ChangePlayerStatus | ChangeCurrentSongDuration | ChangeCurrentSongTime
