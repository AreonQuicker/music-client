import client from '../client/client';

class API {
  // eslint-disable-next-line class-methods-use-this
  async Query(qql) {
    const result = await client.query({
      query: qql,
    });
    return result;
  }
}

export default new API();
