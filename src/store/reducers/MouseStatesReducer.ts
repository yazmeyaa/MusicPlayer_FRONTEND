import { MouseStateAction as Actions, MouseActions } from '../actions/MouseStateAction';

interface IState {
  isMouseDown: boolean;
  isMouseOnProgressBar: boolean;
}

export const initState: IState = {
  isMouseDown: false,
  isMouseOnProgressBar: false,
};

export const MouseStates = (state = initState, action: Actions): IState => {
  switch (action.type) {
    case MouseActions.ChangeIsMouseDown: {
      return { ...state, isMouseDown: !state.isMouseDown };
    }
    case MouseActions.ChangeIsMouseOnProgressBar: {
      return { ...state, isMouseOnProgressBar: action.payload };
    }
    default: {
      return state;
    }
  }
};
