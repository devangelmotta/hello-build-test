import React from 'react';
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Text } from "../../../components/Text";
import A from "../../../components/A";
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Octicon, { RepoForked, Star, MarkGithub, CircuitBoard } from '@primer/octicons-react'

import { GET_REPOS } from "../graphql/resolvers/querys";

const Card = styled(Column)`
    background: #4B79A1; 
    background: -webkit-linear-gradient(to right, #283E51, #4B79A1);  
    background: linear-gradient(to right, #283E51, #4B79A1);

  }
`;

export default function CardComponent(props) {
    const getRepos = useQuery(GET_REPOS);
    var data = { ...getRepos.data }
    data = data.viewer && data.viewer.repositories && data.viewer.repositories.nodes;
    console.log(data)

    return (
        data ? data.map((item, index) => {
            return (

                <Card width="60%" height="30%" borderRadius="10px" margin="20px">
                    <Row>
                        <Column width="null" height="null">
                            <Row width="null" margin="10px 10px 10px 10px">
                                <Octicon icon={MarkGithub} size='medium' />
                                <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw">{item.owner.login}</Text>
                            </Row>
                        </Column>

                        <Column width="null" height="null">
                            <Row width="null" margin="10px 10px 10px 10px">
                                <Octicon icon={CircuitBoard} size='medium' />
                                <Text color="#fff" margin="10px 5px 10px 10px" fontSize="2vw">{item.name}</Text>
                            </Row>
                        </Column>
                    </Row>

                    <Row width="null" justifyContent="flex-start" alignContent="flex-start">
                        <Text color="#fff" fontSize="1.5vw" margin="20px 10px 20px 10px"><A href={`${item.url}`}>{item.url}</A></Text>
                    </Row>
                </Card>
            )

        }) : <p />
    )
}