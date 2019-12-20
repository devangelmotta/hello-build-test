import React from 'react';
import { Row } from "../../components/Row";
import { Link } from "react-router-dom"
import { Text } from "../../components/Text";
import UserLogout from "../../images/brand/Icons/GcIconLogout";
import Logo from "../GoogleCalendar/sections/logo";

export default function NavbarComponent() {
    return (
        <Row backgroundColor="#7161d6" height="4rem">
            <Row padding="1rem 0 1rem 1rem"><Logo /></Row>
            <Row width="null">

                <Row
                    backgroundColor="#aa6ee8"
                    justifyContent="center"
                    width="150px"
                    alignItems="center"
                    margin="0 0 0 10px"
                    borderRadius="5px">
                    <Link to="/calendar"><Text margin="5px 0 5px 0" color="#fff" fontSize="1.2rem">Calendar</Text></Link>
                </Row>

                <Row
                    backgroundColor="#aa6ee8"
                    justifyContent="center"
                    width="150px"
                    alignItems="center"
                    margin="0 0 0 10px"
                    borderRadius="5px">
                    <Link to="/calendar"><Text margin="5px 0 5px 0" color="#fff" fontSize="1.2rem">Github</Text></Link>
                </Row>

            </Row>
            <Row
                justifyContent="flex-end"
                alignContent="center"
                justifyContent="center"
                margin="0 20px 0 20px"
                backgroundColor="#aa6ee8"
                width="5rem" height="3rem"
                borderRadius="5px"
            ><UserLogout width="1.5rem" height="1.5rem" color="#fff" /></Row>

        </Row>
    )
}