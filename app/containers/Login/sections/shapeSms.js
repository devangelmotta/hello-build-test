
import React from 'react';
import { Row } from "../../../components/Row";
import { Image } from "../../../components/Img";
import { SmsLoginBg } from "../../../images/brand";
import styled from 'styled-components';


export const CustomRow = styled(Row)`
    clip-path: polygon(100% 0, 0% 0, 100% 100%);
    background: #4b4fd1;  
    background: linear-gradient(-20deg, #2132cc, #853ece );
    background: -webkit-linear-gradient(-20deg #2132cc, #853ece );  
  `;

export default function ShapeSMSComponent() {
    return (
        <CustomRow className="shape-right-login" width="65%" height={`${window.innerHeight}px`} justifyContent="flex-end">
            <Image src={SmsLoginBg} />
        </CustomRow>
    )
}