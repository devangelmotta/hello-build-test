/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/Injectors/injectSaga';
import { useInjectReducer } from 'utils/Injectors/injectReducer';
import makeSelectLogin from './selectors';
import { loadLogin } from "./actions";
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Row } from "../../components/Row";
import { Column } from "../../components/Column";

import Avatar from "./sections/avatar";
import LogoGoCloud from "./sections/logo";
import ShapeSMS from "./sections/shapeSms";
import FormLogin from "./sections/formLogin";
import FormGroup from "../../components/FormGroup";

export function Login({
  dispatch,
  login
}) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  return (
    <Column
      alignContent="null"
      alignItems="null"
    >

      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to Hellobuild" />
      </Helmet>

      <Row width="100%" alignItems="null" alignContent="null">
        <Column alignItems="flex-start" alignContent="null" width="35%" justifyContent="null">
          <LogoGoCloud />
          <Avatar />
          <FormGroup>
            <FormLogin dispatch={dispatch} loadLogin={loadLogin} state={login} />
          </FormGroup>
        </Column>
        <ShapeSMS />

      </Row>
    </Column>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
