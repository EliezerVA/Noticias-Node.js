const express = require('express')
const router = express.Router();

const homeController = require('../controllers/homeController');



router.post('/add', homeController.save);


module.exports = router;