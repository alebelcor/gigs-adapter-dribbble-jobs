'use strict';

const got = require('got');

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getJson = require('./lib/get-json');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'https://dribbble.com/jobs.rss';

module.exports = function gigsAdapterDribbbleJobs(options) {
  options = options || {};

  return got.get(ADAPTER_ENDPOINT, getGotOptions())
    .then(getResponseBody)
    .then(getJson)
    .then(getGigs)
    .catch(console.error);
};
