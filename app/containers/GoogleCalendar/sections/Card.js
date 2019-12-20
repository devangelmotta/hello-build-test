import React from 'react';
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Text } from "../../../components/Text";
import A from "../../../components/A";
import styled from 'styled-components';

import Agent from "../../../images/brand/Icons/GcIconAgent";
import Dialog from "../../../images/brand/Icons/GcIconDialog";
import Location from "../../../images/brand/Icons/GcIconLocation";
import Time from "../../../images/brand/Icons/GcIconTime";
import Phone from "../../../images/brand/Icons/GcIconPhone";
import Check from "../../../images/brand/Icons/GcIconCheck";
import User from "../../../images/brand/Icons/GcIconUser";
const Card = styled(Column)`
    opacity: 0.7;
    background: #141E30;  
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  
    background: linear-gradient(to right, #243B55, #141E30); 
  }
`;

export default function CardComponent(props) {
    var { data } = props;
    var _data = [data];

    console.log("data => ", [data])
    return (
        _data.length > 0 ? _data.map((item, index) => {
            return (

                <Card width="60%" height="40%" borderRadius="10px" margin="20px">
                    <Row>
                        <Column width="null" height="null">
                            <Row width="null" margin="10px 10px 10px 10px">
                                <Agent width="2rem" height="2rem" color="#fff" />
                                <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw">Organizer</Text>
                            </Row>
                            <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw">{item.creator.email}</Text>
                        </Column>

                        <Column width="null" height="null">
                            <Row width="null" margin="10px 10px 10px 10px">
                                <Location width="2rem" height="2rem" color="#fff" />
                                <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw">Location</Text>
                            </Row>
                            <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw"> {item.location}</Text>
                        </Column>
                    </Row>

                    <Row width="null" justifyContent="flex-start" alignContent="flex-start">
                        <Text color="#fff" fontSize="1.5vw" margin="20px 10px 20px 10px">{item.summary}</Text>
                    </Row>

                    <Row width="90%">
                        <Row width="null">
                            <Time width="1.5rem" height="1.5rem" color="#fff" />
                            <Text color="#fff" margin="10px 5px 10px 10px" fontSize="1.5vw"> Fecha: {item.start.dateTime}</Text>
                        </Row>

                        <Row width="null">
                            <Text color="#fff" margin="10px 10px 10px 10px" fontSize="1.5vw"> Status: <Check width="1rem" height="1rem" color="green" /> </Text>
                        </Row>
                    </Row>

                    <Row>
                        <Text color="#fff" margin="10px 10px 10px 10px" fontSize="1.5vw"> URL to Live: <A href={`${item.hangoutLink}`}>Click here</A></Text>
                    </Row>
                </Card>
            )

        }) : <p />
    )
}