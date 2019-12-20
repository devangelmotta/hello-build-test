/**
 *
 * Avatar
 *
 */

import React from 'react';
import styled from 'styled-components';


export const Avatar = styled.img`
  height: ${(props) => props.height || "10rem"};
  width: ${props => props.width || "8rem"};
  }
`;
