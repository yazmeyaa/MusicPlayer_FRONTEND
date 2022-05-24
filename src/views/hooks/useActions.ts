import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as PlayerActionCreators from '../store/action-creators/PlayerActions'
import * as MouseStateActionCreators from '../store/action-creators/MouseStateActions'
import * as UserStateActionCreators from '../store/action-creators/UserActions'

const ActionCreators = { ...PlayerActionCreators, ...MouseStateActionCreators, ...UserStateActionCreators }

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}