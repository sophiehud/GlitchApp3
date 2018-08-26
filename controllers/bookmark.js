'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');

const bookmark = {
  index(request, response) {
    const bookmarkId = request.params.id;
    logger.debug('bookmark id = ', bookmarkId);
    const viewData = {
      title: 'bookmark',
      bookmark: bookmarkStore.getbookmark(bookmarkId),
    };
    response.render('bookmark', viewData);
  },

  deleteLink(request, response) {
    const bookmarkId = request.params.id;
    const linkId = request.params.linkid;
    logger.debug(`Deleting Link ${linkId} from bookmark ${bookmarkId}`);
    bookmarkStore.removeLink(bookmarkId, linkId);
    response.redirect('/bookmark/' + bookmarkId);
  },

  addLink(request, response) {
    const bookmarkId = request.params.id;
    const bookmark = bookmarkStore.getbookmark(bookmarkId);
    const newLink = {
      id: uuid(),
      title: request.body.title,
      link: request.body.URL,
    };
    bookmarkStore.addLink(bookmarkId, newLink);
    response.redirect('/bookmark/' + bookmarkId);
  },
};

module.exports = bookmark;
