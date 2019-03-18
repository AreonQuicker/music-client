import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  fetchOptions: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    // if (networkError) {
    //   localStorage.setItem("token", "");
    // }
  },
});

export default client;
