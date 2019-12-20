/**
 *
 * Text
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Text = styled.p`
    display: flex;
    color: ${props => props.color || "#000"}; 
    font-size: ${props => props.fontSize || "1vw"}; 
    font-family: ${props => props.fontFamily || "avenir-medium,sans-serif"}; 
    font-weight: ${props => props.fontWeight || 100};
    text-align: ${props => props.textAlign || "center"};
    max-lines: ${props => props.maxLines || "none"};
    padding: ${props => props.padding || "0 0 0 0"};
    margin: ${props => props.margin || "0 0 0 0"};
      &: focus;
      /// any sentences
  `;

Text.propTypes = {};

