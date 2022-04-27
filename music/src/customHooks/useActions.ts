import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as PlayerActionCreators from '../Redux/action-creators/Player'
import * as MouseCoordinatesCreators from '../Redux/action-creators/MouseCoordinates'

const ActionCreators = {...PlayerActionCreators, ...MouseCoordinatesCreators}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}