/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';
import { LOAD_REGISTER, SUCCESS_REGISTER, ERROR_REGISTER } from './constants';

export const initialState = {
  loadRegister: false,
  loadRegisterPayload: {},
  successRegister: false,
  errorRegister: false
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REGISTER:
        draft.loadRegister = true;
        draft.loadRegisterPayload = action.data;
        draft.errorRegister = false;
        draft.successRegister = false;
        break;

      case SUCCESS_REGISTER:
        draft.loadRegister = false;
        draft.successRegister = true;

        break;
      case ERROR_REGISTER:
        draft.errorRegister = action.error;
        draft.loadRegister = false;
        draft.successRegister = false;
        break;
    }
  });

export default signUpReducer;
