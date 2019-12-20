/**
 *
 * Column
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Column = styled.div`
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || "space-between"};
  align-content: ${props => props.alignContent || "center"}; 
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "null"};
  background-color: ${props => props.backgroundColor || "transparent"};
  padding: ${props => props.padding || "0 0 0 0"};
  border: ${props => props.border || "0 solid transparent"};
  border-radius: ${props => props.borderRadius || "0"};
  margin: ${props => props.margin || "0 0 0 0"};
  `;


Column.propTypes = {};

