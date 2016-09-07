var express = require('express');
var router = express.Router();
var users = require('./users');
var decks = require('./decks');

router.use('/users', users);
router.use('/decks', decks);

module.exports = router;
