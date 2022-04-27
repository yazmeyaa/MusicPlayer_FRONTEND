export enum MouseActions {
    SetCoordinates = 'SetCoordinates'
}

export type SetCoordinates = {
    type: MouseActions.SetCoordinates,
    payload: {
        xPos: number,
        yPos: number
    }
}

export type MouseCoordinatesAction = SetCoordinates