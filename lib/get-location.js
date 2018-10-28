'use strict';

module.exports = function getLocation(json) {
  let location = null;

  if (json.title) {
    const matches = /.* in ((?!remote|anywhere|utc).*)$/i.exec(json.title);

    if (Array.isArray(matches)) {
      location = matches[1].trim();
    }
  }

  return location;
};
