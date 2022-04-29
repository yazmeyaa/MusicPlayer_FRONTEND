export enum MouseCoordinatesActions {
    SetCoordinates = 'SetCoordinates'
}


type SetCoordinates = {
    type: MouseCoordinatesActions.SetCoordinates,
    payload: {
        xPos: number,
        yPos: number
    }
}

export type MouseCoordinatesAction = SetCoordinates