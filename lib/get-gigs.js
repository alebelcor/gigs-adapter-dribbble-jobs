'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getLocation = require('./get-location');
const getIsRemote = require('./get-is-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'dribbble-jobs';
const ADAPTER_SOURCE_URL = 'https://dribbble.com/jobs';

module.exports = json => {
  return json.items.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: getTitle(job),
      description: job.description,
      url: job.link,
      company_name: job['dc:creator'], // eslint-disable-line camelcase
      location: getLocation(job),
      remote: getIsRemote(job),
      published_at: getPublishedAt(job) // eslint-disable-line camelcase
    });
  });
};
