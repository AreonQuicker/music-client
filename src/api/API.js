import client from '../client/client';

class API {
  // eslint-disable-next-line class-methods-use-this
  async Query(qql, variables) {
    const result = await client.query({
      query: qql,
      variables,
    });
    return result;
  }
}

export default new API();
