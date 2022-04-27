import {configureStore} from '@reduxjs/toolkit'
import { MusicReducer, initialState as PlayerInitialState } from '../reducers/MusicReducer'

export const store = configureStore({
    reducer: {
        PlayerStore: MusicReducer,
    },
    preloadedState: {
        PlayerStore: PlayerInitialState,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch