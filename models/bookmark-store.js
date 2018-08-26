'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const bookmarkStore = {

  store: new JsonStore('./models/bookmark-store.json', { bookmarkCollection: [] }),
  collection: 'bookmarkCollection',

  getAllbookmarks() {
    return this.store.findAll(this.collection);
  },

  getbookmark(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addbookmark(bookmark) {
    this.store.add(this.collection, bookmark);
  },

  removebookmark(id) {
    const bookmark = this.getbookmark(id);
    this.store.remove(this.collection, bookmark);
  },

  removeAllbookmarks() {
    this.store.removeAll(this.collection);
  },

  addLink(id, link) {
    const bookmark = this.getbookmark(id);
    bookmark.links.push(link);
  },

  removeLink(id, linkId) {
    const bookmark = this.getbookmark(id);
    const links = bookmark.links;
    _.remove(links, { id: linkId});
  },
};

module.exports = bookmarkStore;


