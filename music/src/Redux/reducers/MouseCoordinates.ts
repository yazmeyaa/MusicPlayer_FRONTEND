import { MouseCoordinatesAction, MouseCoordinatesActions } from '../actions/MouseCoordinatesAction'

interface IMouseCoordinates {
    xPos: number,
    yPos: number
}

export const initialState: IMouseCoordinates = {
    xPos: 0,
    yPos: 0
} 

export const MouseCoordinatesReducer = (state = initialState, action: MouseCoordinatesAction): IMouseCoordinates =>  {
    switch(action.type){
        case MouseCoordinatesActions.SetCoordinates: {
            return {...state, xPos: action.payload.xPos, yPos: action.payload.yPos}
        }
        default: {
            return state
        }
    }
}