/*
 *
 * Login actions
 *
 */

import { LOAD_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './constants';

export function loadLogin(data) {
  return {
    type: LOAD_LOGIN,
    data
  };
}

export function successLogin() {
  return {
    type: SUCCESS_LOGIN,
  };
}

export function errorLogin(error) {
  return {
    type: ERROR_LOGIN,
    error
  };
}
