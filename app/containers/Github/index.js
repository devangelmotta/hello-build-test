/**
 *
 * Github
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/Injectors/injectSaga';
import { useInjectReducer } from 'utils/Injectors/injectReducer';
import makeSelectGithub from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { client_id } from "./graphql/config";

import { getToken } from "../../utils/LocalStorageSessions/methodsAccessToken";
import { checkExistToken } from "../../utils/LocalStorageSessions/checkGitHubSession";

import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import Navbar from "./sections/navbar";
import Card from "./sections/Card";

const Container = styled(Column)`
  background: #D3CCE3;  
  background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  
  background: linear-gradient(to right, #E9E4F0, #D3CCE3); 
  }
`;

const token = getToken();
const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`
  }
});
const client = new ApolloClient({
  cache: cache,
  link: httpLink,
});

checkExistToken(client_id)

export function Github() {
  useInjectReducer({ key: 'github', reducer });
  useInjectSaga({ key: 'github', saga });

  return (
    <ApolloProvider client={client}>
      <div>
        <Helmet>
          <title>Github</title>
          <meta name="description" content="Description of Github" />
        </Helmet>
        <Navbar />
        <Container height={`${window.innerHeight}px`}>
          <Column>
            <Card />
          </Column>

        </Container>
      </div>
    </ApolloProvider>
  );
}

Github.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  github: makeSelectGithub(),
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

export default compose(withConnect)(Github);
