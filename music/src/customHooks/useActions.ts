import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as PlayerActionCreators from '../Redux/action-creators/PlayerActions'
import * as MouseStateActionCreators from '../Redux/action-creators/MouseStateActions'
import * as UserStateActionCreators from '../Redux/action-creators/UserActions'

const ActionCreators = { ...PlayerActionCreators, ...MouseStateActionCreators, ...UserStateActionCreators }

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}