const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController');

router.get('/', usersController.list);
router.post('/add', usersController.agregar);
router.get('/delete/:ID', usersController.borrar);
router.get('/update/:ID', usersController.editar);
router.post('/update/:ID', usersController.actualizar);



module.exports = router;