import { Dispatch } from "redux"
import { MouseCoordinatesAction, MouseActions } from "../actions/MouseCordsAction"

interface ISetCurrentCoordinates {
    xPos: number,
    yPos: number
}

export const SetCurrentCoordinates = ({xPos, yPos}: ISetCurrentCoordinates) => {
    return async (dispatch: Dispatch<MouseCoordinatesAction>) => {
            dispatch({type: MouseActions.SetCoordinates, payload: {xPos: xPos, yPos: yPos}})
    }
}