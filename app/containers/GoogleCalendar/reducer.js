/*
 *
 * GoogleCalendar reducer
 *
 */
import produce from 'immer';
import { LOAD_DATA, SUCCESS_DATA, ERROR_DATA } from './constants';

export const initialState = {
  loadData: false,
  successData: false,
  errorData: false,
};

/* eslint-disable default-case, no-param-reassign */
const googleCalendarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA:
        draft.loadData = true;
        draft.successData = false;
        draft.errorData = false;
        break;
      case SUCCESS_DATA:
        draft.loadData = false;
        draft.successData = action.data;
        break;
      case ERROR_DATA:
        draft.loadData = false;
        draft.errorData = action.error;
        break;
    }
  });

export default googleCalendarReducer;
