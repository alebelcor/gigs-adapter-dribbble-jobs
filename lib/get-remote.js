'use strict';

module.exports = function getRemote(json) {
  return typeof json.title === 'string' && /(anywhere|remote|remote.*)$/i.test(json.title);
};
