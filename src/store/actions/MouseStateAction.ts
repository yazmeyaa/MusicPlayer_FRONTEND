export enum MouseActions {
  SetCoordinates = 'SetCoordinates',
  ChangeIsMouseDown = 'ChangeIsMouseDown',
  ChangeIsMouseOnProgressBar = 'ChangeIsMouseOnProgressBar',
}

type ChangeIsMouseDown = {
  type: MouseActions.ChangeIsMouseDown;
};

type isMouseOnProgressBar = {
  type: MouseActions.ChangeIsMouseOnProgressBar;
  payload: boolean;
};

export type MouseStateAction = ChangeIsMouseDown | isMouseOnProgressBar;
