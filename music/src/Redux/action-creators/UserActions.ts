import { Dispatch } from "redux"
import {UserActions, UserStateActions} from '../actions/UserActions'

export const SetJWT = (JWT: string) => {
    return async (dispatch: Dispatch<UserStateActions>) => {
            dispatch({type: UserActions.SET_JWT, payload: JWT})
    }
}

export const RemoveJWT = () => {
    return async (dispatch: Dispatch<UserStateActions>) => {
            dispatch({type: UserActions.REMOVE_JWT})
    }
}