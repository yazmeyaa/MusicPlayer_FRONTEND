import { Dispatch } from "redux"
import { MouseStateAction, MouseActions } from "../actions/MouseStateAction"

export const ChangeIsMouseDown = () => {
    return async (dispath: Dispatch<MouseStateAction>) => {
        dispath({type: MouseActions.ChangeIsMouseDown})
    }
}

export const ChangeIsMouseOnProgressBar = (value: boolean) => {
    return async (dispatch: Dispatch<MouseStateAction>) => {
        dispatch({type: MouseActions.ChangeIsMouseOnProgressBar, payload: value})
    }
}