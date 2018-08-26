'use strict';
const profilestore = require('../models/profile-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('bookmark', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const profile = request.body;
    profile.id = uuid();
    profilestore.addprofile(profile);
    logger.info(`registering ${profile.email}`);
    response.redirect('/');
  },

  authenticate(request, response) {
    const profile = profilestore.getprofileByEmail(request.body.email);
    if (profile) {
      response.cookie('bookmark', profile.email);
      logger.info(`logging in ${profile.email}`);
      response.redirect('/menu');
    } else {
      response.redirect('/login');
    }
  },

  getCurrentprofile (request) {
    const profileEmail = request.cookies.bookmark;
    return profilestore.getprofileByEmail(profileEmail);
  }
}

module.exports = accounts;