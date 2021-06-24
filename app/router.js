const express = require('express');
const affairesController = require('./controllers/affairesController');
const contactController = require('./controllers/contactController');
const mainController = require('./controllers/mainController');
const photoController = require('./controllers/photoController');

const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('/affaires', affairesController.getAffaires);
router.get('/photoshoppeur',photoController.getPhotoshoppeur);
router.get('/contact', contactController.getContact);


module.exports = router;