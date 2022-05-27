export enum UserActions {
  REMOVE_JWT = 'REMOVE_JWT',
  SET_JWT = 'SET_JWT',
}

type SET_JWT = {
  type: UserActions.SET_JWT;
  payload: string;
};

type REMOVE_JWT = {
  type: UserActions.REMOVE_JWT;
};

export type UserStateActions = SET_JWT | REMOVE_JWT;
