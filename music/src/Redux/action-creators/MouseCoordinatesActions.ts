import { Dispatch } from "redux"
import { MouseCoordinatesAction, MouseCoordinatesActions } from "../actions/MouseCoordinatesAction"

export const SetMouseCoordinates = (xPos: number, yPos:number) => {
    return async (dispath: Dispatch<MouseCoordinatesAction>) => {
        dispath({type: MouseCoordinatesActions.SetCoordinates, payload: {xPos: xPos, yPos: yPos}})
    }
}
