'use strict';

module.exports = function getLocation(json) {
  let location = null;
  let matches;

  if (json.title) {
    matches = /.+ in ((?!remote).+)$/i.exec(json.title);

    if (Array.isArray(matches)) {
      location = matches[1];
    }
  }

  return location;
};
