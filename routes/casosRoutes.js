const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get("/casos", casosController.listarCasos);

router.get("/casos/search", casosController.buscarCasos);

router.get('/casos/:id', casosController.getCasoID);

router.post('/casos', casosController.cadastrarCaso);

router.put('/casos/:id', casosController.editarCaso);

router.patch('/casos/:id', casosController.atualizarParcialCaso);

router.delete('/casos/:id', casosController.deletarCaso);

router.get("/casos", casosController.listarCasosPorAgente);

router.get("/casos/:caso_id/agente", casosController.buscarAgenteDoCaso);



module.exports = router;
