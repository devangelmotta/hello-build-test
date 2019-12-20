/*
 *
 * GoogleCalendar actions
 *
 */

import { LOAD_DATA, SUCCESS_DATA, ERROR_DATA } from './constants';

export function _loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function successData(data) {
  return {
    type: SUCCESS_DATA,
    data
  };
}

export function errorData(error) {
  return {
    type: ERROR_DATA,
    error
  };
}
