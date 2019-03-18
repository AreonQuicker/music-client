import client from '../client/client';

class API {
  // eslint-disable-next-line class-methods-use-this
  async query(qql, variables) {
    const result = await client.query({
      query: qql,
      variables,
      fetchPolicy: 'no-cache',
    });
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  async mutate(qql, variables) {
    const result = await client.mutate({
      mutation: qql,
      variables,
      fetchPolicy: 'no-cache',
    });
    return result;
  }
}

export default new API();
