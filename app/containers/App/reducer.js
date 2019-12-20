
/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { LOAD_LOGIN, LOGIN_ALIVE, LOGIN_EXIT, SESSION_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  loginAlive: false,
  logout: true,
  error: false
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LOGIN:
        draft.loading = true;
        draft.error = false;
        draft.loginAlive = false;
        break;

      case LOGIN_ALIVE:
        draft.loginAlive = true;
        draft.loading = false;
        break;

      case LOGIN_EXIT:
        draft.loading = false;
        draft.loginAlive = false;
        draft.logout = true;
        draft.error = false;
        console.log("Call reducer?")
        break;

      case SESSION_ERROR:
        draft.error = action.error;
        draft.logout = true;
        draft.loading = false;
        draft.loginAlive = false;
        break;
    }

  });

export default appReducer;