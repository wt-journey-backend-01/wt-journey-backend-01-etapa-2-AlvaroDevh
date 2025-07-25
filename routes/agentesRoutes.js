const express = require("express");
const router = express.Router();
const agentesController = require("../controllers/agentesController");

router.get("/agentes", agentesController.listarAgentes);
router.get("/agentes/:id", agentesController.buscarAgentePorId);
router.post("/agentes", agentesController.cadastrarAgente);
router.put("/agentes/:id", agentesController.atualizarAgente);
router.patch("/agentes/:id", agentesController.atualizarParcialAgente);
router.delete("/agentes/:id", agentesController.removerAgente);

module.exports = router;
