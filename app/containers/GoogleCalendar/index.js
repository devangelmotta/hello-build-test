/**
 *
 * GoogleCalendar
 *
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/Injectors/injectSaga';
import { useInjectReducer } from 'utils/Injectors/injectReducer';
import makeSelectGoogleCalendar from './selectors';
import reducer from './reducer';
import saga from './saga';
import { _loadData } from "./actions";
import messages from './messages';

import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import Navbar from "./sections/navbar";
import Card from "./sections/Card";
import SideImage from "./sections/sideImagen";
const Container = styled(Column)`
  background: #ff00cc;  
  background: -webkit-linear-gradient(to right, #333399, #ff00cc); 
  background: linear-gradient(to right, #333399, #ff00cc);

  }
`;

export function GoogleCalendar({
  dispatch,
  googleCalendar
}) {


  useEffect(() => {
    dispatch(_loadData())
  }, []);

  console.log(googleCalendar)
  var { loadData, successData, errorData } = googleCalendar;
  console.log(successData)

  useInjectReducer({ key: 'googleCalendar', reducer });
  useInjectSaga({ key: 'googleCalendar', saga });

  return (
    <Container height={`${window.innerHeight}px`} >
      <Navbar />
      <Row>
        {/* <SideImage /> */}
        <Column>
          {successData ? successData.map((item) => { return <Card data={item} /> }) : <p />}
        </Column>

      </Row>


    </Container>
  );
}

GoogleCalendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  googleCalendar: makeSelectGoogleCalendar(),
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

export default compose(withConnect)(GoogleCalendar);
