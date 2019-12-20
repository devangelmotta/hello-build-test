/**
 *
 * App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { RouteProtected } from "../../utils/LocalStorageSessions/routeProtected";
import Login from "containers/Login"
import SignUp from "containers/SignUp";
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TokenProvider from "containers/TokenProvider";
import Calendar from "containers/GoogleCalendar";
import Github from "containers/Github";
import Header from 'components/Header';
import Footer from 'components/Footer';


import { useInjectSaga } from 'utils/Injectors/injectSaga';
import { useInjectReducer } from 'utils/Injectors/injectReducer';
import makeSelectApp from './selectors';
import makeSelectLogin from "../Login/selectors";
import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';


const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export function App({
  dispatch,

}) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Hellobuild"
        defaultTitle="Welcome to Hellobuild"
      >
        <meta name="description" content="A test project" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <RouteProtected path="/github" component={Github} />
        <RouteProtected path="/" component={Calendar} />
        <Route exact path="/generate-token" component={TokenProvider} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
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

export default compose(
  withConnect,
  memo,
)(App);
