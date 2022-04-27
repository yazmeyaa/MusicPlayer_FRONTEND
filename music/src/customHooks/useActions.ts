import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionCreators from '../Redux/action-creators/Player'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}