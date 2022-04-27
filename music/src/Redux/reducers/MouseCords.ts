import { MouseCoordinatesAction as Actions, MouseActions } from '../actions/MouseCordsAction'

interface IState {
    xPos: number
    yPos: number
}

export const initState:IState = {
    xPos: 0,
    yPos: 0
}

export const MouseCords = (state = initState, action: Actions):IState => {
    switch(action.type){
        case MouseActions.SetCoordinates: {
            return {...state, xPos: action.payload.xPos, yPos: action.payload.yPos}
        }
        default: {
            return state
        }
    }
}