const axios = require('axios');

class ApiClient {
  constructor(baseUrl) {
    this.client = axios.create({ baseURL: baseUrl });
  }

  async login(username, password) {
    return this.client.post('/api/login', { username, password });
  }
}

module.exports = { ApiClient };
