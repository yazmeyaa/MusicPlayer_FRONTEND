import { RecievedData } from '../types/PlayerTypes';

type PlayerActionsTypes = {
  ChangeCurrentSong: 'ChangeCurrentSong';
  ChangePlayerStatus: 'ChangePlayerStatus';
  ChangeCurrentSongDuration: 'ChangeCurrentSongDuration';
  ChangeCurrentSongTime: 'ChangeCurrentSongTime';
  FetchSongList: 'FetchSongList';
  FetchSongListError: 'FetchSongListError';
  FetchSongListSuccess: 'FetchSongListSuccess';
  ClearError: 'ClearError';
};

export const PlayerActions: PlayerActionsTypes = {
  ChangeCurrentSong: 'ChangeCurrentSong',
  ChangePlayerStatus: 'ChangePlayerStatus',
  ChangeCurrentSongDuration: 'ChangeCurrentSongDuration',
  ChangeCurrentSongTime: 'ChangeCurrentSongTime',
  FetchSongList: 'FetchSongList',
  FetchSongListError: 'FetchSongListError',
  FetchSongListSuccess: 'FetchSongListSuccess',
  ClearError: 'ClearError',
};

type ChangeCurrentSong = {
  type: 'ChangeCurrentSong';
  payload: string | null;
};

type ChangePlayerStatus = {
  type: 'ChangePlayerStatus';
};

type ChangeCurrentSongDuration = {
  type: 'ChangeCurrentSongDuration';
  payload: number;
};

type ChangeCurrentSongTime = {
  type: 'ChangeCurrentSongTime';
  payload: number;
};

type FetchSongList = {
  type: 'FetchSongList';
};

type FetchSongListError = {
  type: 'FetchSongListError';
  payload: string;
};

type FetchSongListSucces = {
  type: 'FetchSongListSuccess';
  payload: Array<RecievedData>;
};

type ClearError = {
  type: 'ClearError';
};

export type PlayerActionTypes =
  | ChangeCurrentSong
  | ChangePlayerStatus
  | ChangeCurrentSongDuration
  | ChangeCurrentSongTime
  | FetchSongList
  | FetchSongListError
  | FetchSongListSucces
  | ClearError;
