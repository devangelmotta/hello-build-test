import React from 'react';
import { Row } from "../../../components/Row";
import { Image } from "../../../components/Img";
import { GcLogoDefault } from "../../../images/brand";

export default function LogoComponent() {
    return (
        <Row padding="1rem 1rem 1rem 1rem">
            <Image src={GcLogoDefault} alt="Hellobuil user" width="10%" height="null" />
        </Row>)
}