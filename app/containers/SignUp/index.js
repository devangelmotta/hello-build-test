/**
 *
 * SignUp
 *
 */

import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { setNewUserLocalStorage } from "../../utils/LocalStorageSessions/singup";

import { useInjectSaga } from 'utils/Injectors/injectSaga';
import { useInjectReducer } from 'utils/Injectors/injectReducer';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadRegister } from "./actions";

import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Background } from "../../images/brand";
import FormSignUp from "./sections/formSignUp";
import FormGroup from "../../components/FormGroup";
import Alert, { TimerAlert } from "../../components/Alerts";
const Container = styled(Column)`
  background-image: url(${Background}); 
  }
`;

const GradientColumn = styled(Column)`
opacity: 0.8;
border-radius: 4px;
background: #2980b9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
`;

export function SignUp({
  dispatch,
  signUp
}) {

  useInjectReducer({ key: 'signUp', reducer });
  useInjectSaga({ key: 'signUp', saga });

  return (
    <Container height={`${window.innerHeight}px`} justifyContent="center">
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      {signUp.errorRegister && <Alert text={signUp.errorRegister} />}

      <GradientColumn width="40%" height="80%">
        <FormGroup>
          <FormSignUp dispatch={dispatch} loadRegister={loadRegister} state={signUp} />
        </FormGroup>
      </GradientColumn>
    </Container>
  );
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUp);
