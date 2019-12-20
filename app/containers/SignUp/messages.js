/*
 * SignUp Messages
 *
 * This contains all the text for the SignUp container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SignUp';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SignUp container!',
  },
  buttonSignIn: {
    id: `${scope}.container.signup`,
    defaultMessage: 'REGISTER',
  },
  orLogin: {
    id: `${scope}.container.signup`,
    defaultMessage: 'You have account?',
  },
  emailLabel: {
    id: `${scope}.container.signup`,
    defaultMessage: 'Email',
  },
  passwordLabel: {
    id: `${scope}.container.signup`,
    defaultMessage: 'Password',
  },
  signUpSuggest: {
    id: `${scope}.container.signup`,
    defaultMessage: 'Already Registered?',
  },
});
