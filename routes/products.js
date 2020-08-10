var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET home page. */
router.get('/cant/:id', productsController.productsCant);

module.exports = router;