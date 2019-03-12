import gql from 'graphql-tag';

export const GET_ALL_SONGS = gql`
  {
    songs2 {
      id
      name
      downloadPath
    }
  }
`;
