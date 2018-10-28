'use strict';

module.exports = function getIsRemote(json) {
  return typeof json.title === 'string' && /^.*(anywhere|remote).*$/i.test(json.title);
};
