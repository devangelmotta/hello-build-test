/*
 *
 * SignUp actions
 *
 */

import { LOAD_REGISTER, SUCCESS_REGISTER, ERROR_REGISTER } from './constants';

export function loadRegister(data) {
  return {
    type: LOAD_REGISTER,
    data
  };
}

export function successRegister() {
  return {
    type: SUCCESS_REGISTER,
  };
}

export function errorRegister(error) {
  return {
    type: ERROR_REGISTER,
    error
  };
}
