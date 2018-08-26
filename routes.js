'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const menu = require('./controllers/menu.js');
const bookmark = require('./controllers/bookmark.js');
const about = require('./controllers/about.js');
const accounts = require ('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/start', start.index);

router.get('/menu', menu.index);
router.get('/menu/deletebookmark/:id', menu.deletebookmark);
router.post('/menu/addbookmark', menu.addbookmark);

router.get('/bookmark/:id', bookmark.index);
router.get('/bookmark/:id/deletelink/:linkid', bookmark.deleteLink);
router.post('/bookmark/:id/addlink', bookmark.addLink);

router.get('/about', about.index);

module.exports = router;