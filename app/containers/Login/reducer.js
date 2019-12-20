/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { LOAD_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './constants';

export const initialState = {
  loadLogin: false,
  successLogin: false,
  errorLogin: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LOGIN:
        draft.loadLogin = action.data;
        draft.successLogin = false;
        draft.errorLogin = false;
        break;
      case SUCCESS_LOGIN:
        draft.loadLogin = false;
        draft.successLogin = true;
        break;
      case ERROR_LOGIN:
        draft.loadLogin = false;
        draft.successLogin = false;
        draft.errorLogin = action.error
        break;
    }
  });

export default loginReducer;
