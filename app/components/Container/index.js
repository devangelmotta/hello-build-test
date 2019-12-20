/**
 *
 * Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container(props) {
  const DIV = styled.div`
    display: ${props => props.display || 'flex'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '0 0 0 0'};
    border: ${props => props.border || '0 solid transparent'};
    border-radius: ${props => props.borderRadius || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    box-sizing: ${props => props.boxSizing || 'null'};
    outline: ${props => props.outline || 'none'};
    &: focus;
    /// any sentences
  `;

  return DIV;
}

Container.propTypes = {};

export default Container;
