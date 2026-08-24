const users = require('../data/users.json');

module.exports = {
  getValidUser() {
    return users.validUser;
  },
  getInvalidUser() {
    return users.invalidUser;
  }
};
