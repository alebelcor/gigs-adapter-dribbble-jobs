'use strict';

module.exports = json => {
  let title = null;

  if (json.title) {
    const matches = /^.* is hiring an? (.*) (in .*|anywhere\s*)$/i.exec(json.title);

    if (Array.isArray(matches)) {
      title = matches[1];
    }
  }

  return title;
};
