'use strict';

const pkg = require('../package.json');

module.exports = function getGotOptions() {
  return {
    headers: {
      'user-agent': pkg.repository.url
    }
  };
};
