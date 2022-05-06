export type RecievedData = {
    URL: string,
    Author: string,
    Name: string,
    Duration: number,
    Description?: string,
    Lyrics: string
}

export interface StateType {
    currentPlayingSongURL: string | null,
    play: boolean,
    songCurrentTime: number,
    songDuration: number,
    songList: Array<RecievedData> | [],
    loading: boolean,
    error: string | null
}
