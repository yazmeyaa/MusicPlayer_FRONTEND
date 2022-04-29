import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from '../reducers'
import { initialState as PlayerState } from '../reducers/PlayerReducer'
import { initState as MouseState } from '../reducers/MouseStatesReducer'
import {initialState as MouseCoordintatesState} from '../reducers/MouseCoordinates'

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: {
        PlayerState: PlayerState,
        MouseState: MouseState,
        MouseCoordinates: MouseCoordintatesState    
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch