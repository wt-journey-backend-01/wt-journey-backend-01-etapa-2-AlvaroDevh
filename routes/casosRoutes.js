const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/casos', casosController.getAllCasos);

router.get('/casos/:id', casosController.getCasoID);

router.post('/casos', casosController.cadastrarCaso);

router.put('/casos', casosController.editarCaso);

router.patch('/casos/:id', casosController.atualizarParcialCaso);

router.delete('/casos/:id', casosController.deletarCaso);


module.exports = router;
