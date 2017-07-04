var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main.controller')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Inicio' });
});

router.post('/', mainController.cargarNivel);

router.post('/cuestionario', mainController.cargarNivel);


module.exports = router;
