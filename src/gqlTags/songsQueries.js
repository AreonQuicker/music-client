import gql from 'graphql-tag';

export const GET_ALL_SONGS = gql`
  query {
    songs2 {
      id
      name
      downloadPath
    }
  }
`;

export const CREATE_SONG = gql`
  mutation($name: String!, $desc: String!, $downloadPath: String!) {
    createSong(name: $name, desc: $desc, downloadPath: $downloadPath) {
      id
      name
      downloadPath
    }
  }
`;

// createSong(name: String, desc: String, downloadPath: String)
