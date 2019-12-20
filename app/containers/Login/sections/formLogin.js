import React, { useContext } from 'react';
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
    var { dispatch, loadLogin, state } = props;
    var context = useContext(ContextComponent);

    return (

        <Column
            width="null" alignItems="null" alignContent="null"
            margin="20px 0 0 50px"
        >
            <Column alignItems="flex-start" >
                <Column width="null" height="null" >
                    <Row >
                        <Text color="#706d7f" padding="0 0 0 10px" fontWeight={600} textAlign="right"><FormattedMessage {...messages.emailLabel} /></Text>
                    </Row>


                    <InputItem
                        name="email"
                        type="email"
                        autocomplete="email"
                        width="20vw"
                        message={context.message}
                        onChange={context.handleChange}
                        onBlur={context.handleBlur} />

                </Column>

                <Column width="null" height="null" padding="15px 0 0 0">
                    <Row>
                        <Text color="#706d7f" padding="0 0 0 10px" fontWeight={600} textAlign="right"><FormattedMessage {...messages.passwordLabel} /></Text>
                    </Row>

                    <InputItem
                        name="password"
                        type="password"
                        autocomplete="password"
                        width="20vw"
                        message={context.message}
                        onChange={context.handleChange}
                        onBlur={context.handleBlur} />

                </Column>

            </Column>

            <Button
                margin="10px 0 0 0"
                onClick={() => dispatch(loadLogin(context.valuesInput))}
                backgroundColor="#18d399"
                disabled={state.loadLogin}
                borderRadius="10rem"
                height="2.5rem" width="50%"
                justifyContent="center"
                className="box-input-item button-login">
                <Text color="#FFF" fontWeight={"bold"} fontSize="1rem" padding="0 1.5rem 0 1.5rem">{state.loadLogin ? "Loading..." : <FormattedMessage {...messages.buttonSignIn} />}</Text>
            </Button>

            <Row margin="30px 0 0 0">
                <Link to={state.loadLogin ? "#" : "/signup"}>
                    <Text color="#428bca" padding="0 0 0 10px" fontWeight={600} fontSize="1vw" textAlign="right"><FormattedMessage {...messages.signUpSuggest} /></Text>

                </Link>
            </Row>
        </Column>
    )
}