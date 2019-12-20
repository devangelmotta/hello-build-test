/*
 * App Actions
 */

import { LOGIN_ALIVE, LOGIN_EXIT, SESSION_ERROR, LOAD_LOGIN } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */

export function loadLogin() {
  return {
    type: LOAD_LOGIN,
  };
}

export function loginSuccess() {
  console.log("Call App Status")
  return {
    type: LOGIN_ALIVE,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} data The object with data user login
 *
 * @return {object}      An action object with a type of LOAD_LOGIN_SUCCESS passing the repos
 */
export function Logout() {
  return {
    type: LOGIN_EXIT
  };
}

export function SessionError(error) {
  return {
    type: SESSION_ERROR,
    error
  };
}