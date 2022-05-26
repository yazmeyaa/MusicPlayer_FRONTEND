import { UserStateActions as Actions, UserActions } from '../actions/UserActions'

interface IState {
    JWT: string | null
}

export const initState: IState = {
    JWT: null
}

export const UserState = (state = initState, action: Actions): IState => {
    switch (action.type) {

        case UserActions.SET_JWT: {
            return { ...state, JWT: action.payload }
        }

        case UserActions.REMOVE_JWT: {
            return { ...state, JWT: null }
        }

        default: {
            return state
        }
    }
}