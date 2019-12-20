/**
 *
 * InputItem
 *
 */
import React, { useContext } from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import { ContextComponent } from "../../FormGroup"
import messages from './messages';
import { Column } from "../../Column";
import { Input } from "../../Input";
import { Text } from "../../Text";

function InputItem(props) {

  return (
    <Column height="null" width="null">
      <Input type={props.type} name={props.name} onChange={props.handleChange} onBlur={props.handleBlur} {...props} />
    </Column>
  );
}

export default InputItem;
