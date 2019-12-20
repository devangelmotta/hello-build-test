import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Text } from "../../../components/Text";
import InputItem from "../../../components/FormGroup/InputItem";
import { Button } from "../../../components/Button";
import { ContextComponent } from "../../../components/FormGroup";
import messages from '../messages';
import { FormattedMessage } from 'react-intl';

export default function FormLoginComponent(props) {
    var { dispatch, loadRegister, state } = props;
    var context = useContext(ContextComponent);
    { state.successLogin && <Redirect exact to="/" /> }
    { state.errorLogin && alert("Error") }
    return (

        <Column
            width="null" alignItems="null" alignContent="null" margin="10% 0 0 0">

            <Column alignItems="flex-start">
                <Column width="null" height="null" padding="10px 0 0 10px">
                    <InputItem
                        name="firstname"
                        type="text"
                        autocomplete="text"
                        placeholder="First name"
                        width="25vw"
                        border="0 none transparent"
                        backgroundColor="#fff"
                        message={context.message}
                        onChange={context.handleChange}
                        onBlur={context.handleBlur} />
                </Column>

                <Column width="null" height="null" padding="10px 0 0 10px">

                    <InputItem
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="example@hellobuild.com"
                        width="25vw"
                        border="0 none transparent"
                        backgroundColor="#fff"
                        message={context.message}
                        onChange={context.handleChange}
                        onBlur={context.handleBlur} />

                </Column>

                <Column width="null" height="null" padding="10px 0 0 10px">
                    <InputItem
                        name="password"
                        type="password"
                        autocomplete="password"
                        placeholder="Enter a password"
                        width="25vw"
                        border="0 none transparent"
                        backgroundColor="#fff"
                        message={context.message}
                        onChange={context.handleChange}
                        onBlur={context.handleBlur} />
                </Column>

            </Column>
            <Row margin="10px 0 0 0">
                <Button
                    margin="10px 0 0 0"
                    onClick={() => dispatch(loadRegister(context.valuesInput))}
                    disabled={state.loadRegister}
                    backgroundColor="#18d399"
                    borderRadius="10rem"
                    height="2.5rem" width="50%"
                    justifyContent="center"
                    className="box-input-item button-login">
                    <Text color="#FFF" fontWeight={"bold"} fontSize="1rem" padding="0 1.5rem 0 1.5rem">{state.loadRegister ? "Loading..." : <FormattedMessage {...messages.buttonSignIn} />}</Text>
                </Button>

                <Button
                    margin="10px 0 0 0"
                    onClick={console.log("...")}
                    disabled={state.loadRegister}
                    backgroundColor="transparent"
                    borderRadius="10rem"
                    borderWidth="2px"
                    borderColor="green"
                    height="2.5rem" width="40%"
                    justifyContent="center"
                    className="box-input-item button-login">
                    <Link to="/login">
                        <Text color="#000" padding="0 0 0 0" fontWeight={600} fontSize="1vw" textAlign="right"><FormattedMessage {...messages.orLogin} /></Text>
                    </Link>
                </Button>
            </Row>


        </Column>
    )

}