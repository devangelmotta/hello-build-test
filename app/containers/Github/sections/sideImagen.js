import React from 'react';
import { Row } from "../../../components/Row";
import { Avatar } from "../../../components/Avatar";
import { Celebration } from "../../../images/brand";
export default function AvatarComponent() {
    return (
        <Row
            margin="0 0 0 0"
            width="null"
            justifyContent="flex-start" >
            <Row margin="4px 4px 4px 4px">
                <Avatar src={Celebration} width="20%" />
            </Row>

        </Row>)
}