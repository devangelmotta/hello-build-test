
import React from 'react';
import { Row } from "../../../components/Row";
import { Avatar } from "../../../components/Avatar";
import { GcRobot } from "../../../images/brand";
export default function AvatarComponent() {
    return (
        <Row
            margin="50px 0 0 50px"
            width="8rem" height="8rem"
            border="2px solid #ddd"
            hoverBorder="3px solid pink"
            justifyContent="flex-start" >
            <Row margin="4px 4px 4px 4px">
                <Avatar src={GcRobot} width="7rem" height="8rem" />
            </Row>

        </Row>)
} 