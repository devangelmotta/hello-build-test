import { gql } from 'apollo-boost';

export const GET_REPOS = gql`
{
    viewer {
      repositories(first: 100, orderBy: {field:NAME, direction:ASC}) {
        pageInfo {hasNextPage, endCursor}
        nodes {
          name
          url
          isPrivate
          owner {
            login
          }
          defaultBranchRef {
            name        
          }
        }
      }
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: Int){
    getUserInfo(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

