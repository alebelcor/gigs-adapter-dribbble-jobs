'use strict';

const Feedme = require('feedme');
const parser = new Feedme(true);

module.exports = function getJson(responseBody) {
  parser.write(responseBody);
  return parser.done();
}
