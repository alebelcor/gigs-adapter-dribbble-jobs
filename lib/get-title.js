'use strict';

module.exports = function getTitle(json) {
  let title = null;
  let matches;

  if (json.title) {
    matches = /^.+ hiring an? (.+) (in.+|anywhere)$/i.exec(json.title);

    if (Array.isArray(matches)) {
      title = matches[1];
    }
  }

  return title;
};
