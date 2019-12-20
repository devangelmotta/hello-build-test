/**
 *
 * Tests for Text
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import styled, { findAll } from 'styled-components/test-utils';
import { Text } from '../index.js';

ReactDOM.render(
  <main>
    <Text display="flex" width="80%" padding=" 20 20 20 20" />

    <Text display="block" width="50%" padding=" 20 80 20 80" />
    {/** Another tests **/}
  </main>,
  document.body,
);
findAll(document.body, Text);
