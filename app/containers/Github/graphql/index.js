import React from 'react';

// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';




// Repository
class Repository extends React.Component {
    constructor(props) {
        super(props);

        // states
        this.state = {
            login: props.login,
            name: props.name,
            stargazers: 0,
            watchers: 0,
        };
    }


    render() {
        return (<div>
            <h2>{this.state.login}/{this.state.name}</h2>
            <ul>
                <li>stargazers: {this.state.stargazers.toLocaleString()}</li>
                <li>watchers: {this.state.watchers.toLocaleString()}</li>
            </ul>
        </div>)
    }
}

const RepositoryWithInfo = withInfo(Repository);
export default RepositoryWithInfo;