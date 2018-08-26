'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');

const menu = {
  index(request, response) {
    logger.info('Menu rendering');
    const viewData = {
      title: 'bookmark Menu',
      bookmarks: bookmarkStore.getAllbookmarks(),
    };
    logger.info('about to render', bookmarkStore.getAllbookmarks());
    response.render('menu', viewData);
  },

  deletebookmark(request, response) {
    const bookmarkId = request.params.id;
    logger.debug(`Deleting bookmark ${bookmarkId}`);
    bookmarkStore.removebookmark(bookmarkId);
    response.redirect('/menu');
  },

  addbookmark(request, response) {
    const newbookmark = {
      id: uuid(),
      title: request.body.title,
      links: [],
    };
    logger.debug('Creating a new bookmark', newbookmark);
    bookmarkStore.addbookmark(newbookmark);
    response.redirect('/menu');
  },
};

module.exports = menu;
