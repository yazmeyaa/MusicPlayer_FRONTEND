import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as PlayerActionCreators from '../Redux/action-creators/PlayerActions'
import * as MouseStateActionCreators from '../Redux/action-creators/MouseStateActions'
import * as MouseCoordinatesActionCreators from '../Redux/action-creators/MouseCoordinatesActions'

const ActionCreators = {...PlayerActionCreators, ...MouseStateActionCreators, ...MouseCoordinatesActionCreators }

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}