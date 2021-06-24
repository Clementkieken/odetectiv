const express = require('express');
const affairesController = require('./controllers/affairesController');
const contactController = require('./controllers/contactController');
const mainController = require('./controllers/mainController');
const notimeController = require('./controllers/notimeController');
const photoController = require('./controllers/photoController');
const phpController = require ('./controllers/phpController');

const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('/affaires', affairesController.getAffaires);
router.get('/photoshoppeur',photoController.getPhotoshoppeur);
router.get('/contact', contactController.getContact);
router.get('/notime', notimeController.getNoTime);
router.get('/php', phpController.getPhp);


module.exports = router;