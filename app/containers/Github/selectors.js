import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the github state domain
 */

const selectGithubDomain = state => state.github || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Github
 */

const makeSelectGithub = () =>
  createSelector(
    selectGithubDomain,
    substate => substate,
  );

export default makeSelectGithub;
export { selectGithubDomain };
