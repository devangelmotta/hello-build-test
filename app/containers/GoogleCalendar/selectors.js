import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the googleCalendar state domain
 */

const selectGoogleCalendarDomain = state =>
  state.googleCalendar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoogleCalendar
 */

const makeSelectGoogleCalendar = () =>
  createSelector(
    selectGoogleCalendarDomain,
    substate => substate,
  );

export default makeSelectGoogleCalendar;
export { selectGoogleCalendarDomain };
