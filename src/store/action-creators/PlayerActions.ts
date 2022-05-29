import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { PlayerActionTypes, PlayerActions } from '../actions/PlayerActions';
import { RecievedData } from '../types/PlayerTypes';

export const changeCurrentSong = (URL: string) => {
  return async (dispatch: Dispatch<PlayerActionTypes>) => {
    dispatch({ type: PlayerActions.ChangeCurrentSong, payload: URL });
  };
};

export const changeCurrentSongDuration = (duration: number) => {
  return async (dispatch: Dispatch<PlayerActionTypes>) => {
    dispatch({ type: PlayerActions.ChangeCurrentSongDuration, payload: duration });
  };
};

export const changeCurrentSongTime = (time: number) => {
  return async (dispatch: Dispatch<PlayerActionTypes>) => {
    dispatch({ type: PlayerActions.ChangeCurrentSongTime, payload: time });
  };
};

export const changePlayStatus = () => {
  return async (dispatch: Dispatch<PlayerActionTypes>) => {
    dispatch({ type: PlayerActions.ChangePlayerStatus });
  };
};

export const fetchSongList = (URL: string) => {
  return async (dispatch: Dispatch<PlayerActionTypes>) => {
    dispatch({ type: PlayerActions.FetchSongList });

    try {
      axios.post(URL).then((res: AxiosResponse<Array<RecievedData>>) => {
        if (res.data && res.data instanceof Array) {
          dispatch({ type: PlayerActions.FetchSongListSuccess, payload: res.data });
        }
      });
    } catch (error) {
      dispatch({ type: PlayerActions.FetchSongListError, payload: 'Error.' });
    }
  };
};
