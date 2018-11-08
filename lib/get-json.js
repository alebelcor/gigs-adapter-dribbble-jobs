'use strict';

const Feedme = require('feedme');

const parser = new Feedme(true);

module.exports = responseBody => {
  parser.write(responseBody);
  return parser.done();
};
