/**
 *
 * FormComponents
 *
 */
import React, { useState } from 'react';
import { validators } from "../../utils/InputValidations";
export const ContextComponent = React.createContext({});

var currentValues = {}
const FormProvider = props => {

  const [valuesInput, handleChangeValues] = useState();
  const [message, handleSetMessageError] = useState("");

  const handleBlur = async (evt) => {
    console.log("Dispatch on blur");
    var errors = await validators[evt.target.name].validate(evt.target.value);
    if (!errors) return;
    handleSetMessageError(errors[0]);
  }

  const handleChange = async (evt) => {
    console.log(evt.target.value)
    currentValues[evt.target.name] = evt.target.value;
    handleChangeValues(currentValues)
  }

  return (
    <ContextComponent.Provider value={{ handleChange, handleBlur, valuesInput, message }} >
      {props.children}
    </ ContextComponent.Provider>

  );
}

export default FormProvider;
