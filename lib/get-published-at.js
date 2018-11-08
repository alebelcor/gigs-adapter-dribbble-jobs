'use strict';

const moment = require('moment');

module.exports = json => {
  let publishedAt = null;

  if (json.pubdate) {
    publishedAt = moment.utc(json.pubdate, 'ddd, DD MMM YYYY HH:mm:ss Z', true).format('YYYY-MM-DD');
  }

  return publishedAt;
};
