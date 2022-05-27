import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../store/action-creators/PlayerActions';
import * as UserStateActionCreators from '../store/action-creators/UserActions';

const ActionCreators = {
  ...PlayerActionCreators,
  ...UserStateActionCreators,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
