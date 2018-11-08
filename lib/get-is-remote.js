'use strict';

module.exports = json => {
  return typeof json.title === 'string' && /^.*(anywhere|remote).*$/i.test(json.title);
};
