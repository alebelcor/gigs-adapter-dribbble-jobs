'use strict';

const pkg = require('../package.json');

module.exports = () => {
  return {
    headers: {
      'user-agent': pkg.repository.url
    }
  };
};
