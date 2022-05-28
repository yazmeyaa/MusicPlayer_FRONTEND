type UserActionsTypes = {
  REMOVE_JWT: 'REMOVE_JWT';
  SET_JWT: 'SET_JWT';
};

export const UserActions: UserActionsTypes = {
  REMOVE_JWT: 'REMOVE_JWT',
  SET_JWT: 'SET_JWT',
};

type SET_JWT = {
  type: 'SET_JWT';
  payload: string;
};

type REMOVE_JWT = {
  type: 'REMOVE_JWT';
};

export type UserStateActions = SET_JWT | REMOVE_JWT;
