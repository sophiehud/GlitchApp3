'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const profileStore = {

  store: new JsonStore('./models/profile-store.json', {profiles: []}),
  collection: 'profiles',

  getAllprofiles() {
    return this.store.findAll(this.collection);
  },

  addprofile(profile) {
    this.store.add(this.collection, profile);
  },

  getprofileById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getprofileByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },
}

module.exports = profileStore;