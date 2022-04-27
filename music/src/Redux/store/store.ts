import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from '../reducers'
import { initialState as MusicState } from '../reducers/MusicReducer'
import { initState as MouseCoordintaesState } from '../reducers/MouseCords'

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: {
        PlayerReducer: MusicState,
        MouseCoordinates: MouseCoordintaesState
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch