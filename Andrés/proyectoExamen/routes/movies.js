var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController');

/* GET home page. */
router.get('/mostrarTodas', moviesController.getAll);

router.post('/crear', moviesController.addOne);

router.post('/borrar', moviesController.deleteOne);

// router.post('/editar', moviesController.updateOne);


module.exports = router;
