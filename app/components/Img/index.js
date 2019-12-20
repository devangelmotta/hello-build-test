/**
 *
 * Image.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Image = styled.img`
  display: ${props => props.display || "flex"};
  width: ${props => props.width || "50%"};
  height: ${props => props.height || null};
  z-index: ${props => props.zIndex || null};;
  color: ${props => props.color || "#5e70c3"}; 
  padding: ${props => props.padding || "0 0 0 0"};
  margin: ${props => props.margin || "0 0 0 0"};
    &: focus;
    /// any sentences
  `;

// We require the use of src and alt, only enforced by react in dev mode
Image.propTypes = {};


