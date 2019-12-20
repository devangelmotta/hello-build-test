/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'hellobuild';

export default defineMessages({
  header: {
    id: `${scope}.component.header`,
    defaultMessage: 'Login to the amazing',
  },
  buttonSignIn: {
    id: `${scope}.container.login.sign`,
    defaultMessage: 'Enjoy!',
  },
  emailLabel: {
    id: `${scope}.container.login.emailLabel`,
    defaultMessage: 'Email',
  },
  passwordLabel: {
    id: `${scope}.container.login.passwordLabel`,
    defaultMessage: 'Password',
  },
  signUpSuggest: {
    id: `${scope}.container.login.signSuggest`,
    defaultMessage: 'Already Registered?',
  },
});