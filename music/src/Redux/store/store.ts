import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from '../reducers'
import { initialState as PlayerState } from '../reducers/PlayerReducer'
import { initState as MouseState } from '../reducers/MouseStatesReducer'

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: {
        PlayerState: PlayerState,
        MouseState: MouseState,  
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch