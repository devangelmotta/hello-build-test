/**
 *
 * Tests for Column
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import styled, { findAll } from 'styled-components/test-utils';
import { Column } from '../index.js';

ReactDOM.render(
  <main>
    <Column display="flex" width="80%" padding=" 20 20 20 20" />

    <Column display="block" width="50%" padding=" 20 80 20 80" />
    {/** Another tests **/}
  </main>,
  document.body,
);
findAll(document.body, Column);
