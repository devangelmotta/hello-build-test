/**
 *
 * TokenProvider
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { generateToken } from "./generateToken";
import { getToken } from "../../utils/LocalStorageSessions/methodsAccessToken";

export function TokenProvider() {

  useEffect(() => {
    let token = getToken();
    if (token) {
      window.location.replace("http://localhost:3000/");
    }
    generateToken()
  }, []);
  return <div />;
}

TokenProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TokenProvider);

