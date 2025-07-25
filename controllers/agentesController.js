const { v4: uuidv4 } = require("uuid");
const agentesRepository = require("../repositories/agentesRepository");

if (!agentesRepository.findById(agente_id)) {
    return res.status(404).json({ message: "Agente não encontrado para o agente_id fornecido." });
}

function listarAgentes(req, res) {
    const agentes = agentesRepository.findAll();
    res.status(200).json(agentes);
}

function buscarAgentePorId(req, res) {
    const agente = agentesRepository.findById(req.params.id);
    if (!agente) {
        return res.status(404).json({ message: "Agente não encontrado." });
    }
    res.status(200).json(agente);
}

function cadastrarAgente(req, res) {
    const { nome, dataDeIncorporacao, cargo } = req.body;

    if (!isValidDate(dataDeIncorporacao)) {
    return res.status(400).json({ message: "dataDeIncorporacao inválida ou no futuro." });
}

    const novoAgente = {
        id: uuidv4(),
        nome,
        dataDeIncorporacao,
        cargo
    };

    agentesRepository.create(novoAgente);
    res.status(201).json(novoAgente);
}

function atualizarAgente(req, res) {
    const { id } = req.params;
    const { nome, dataDeIncorporacao, cargo } = req.body;

    if (!agentesRepository.findById(agente_id)) {
    return res.status(404).json({ message: "Agente não encontrado para o agente_id fornecido." });
}
    if (!nome || !dataDeIncorporacao || !cargo) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const atualizado = agentesRepository.update(id, { nome, dataDeIncorporacao, cargo });

    if (!atualizado) {
        return res.status(404).json({ message: "Agente não encontrado." });
    }

    res.status(200).json(atualizado);
}

function atualizarParcialAgente(req, res) {
    const { id } = req.params;
    const atualizacao = req.body;

    if (!agentesRepository.findById(agente_id)) {
    return res.status(404).json({ message: "Agente não encontrado para o agente_id fornecido." });
}

    if (Object.keys(atualizacao).length === 0) {
        return res.status(400).json({ message: "É necessário fornecer dados para atualizar." });
    }

    const atualizado = agentesRepository.updatePartial(id, atualizacao);

    if (!atualizado) {
        return res.status(404).json({ message: "Agente não encontrado." });
    }

    res.status(200).json(atualizado);
}

function removerAgente(req, res) {
    const removido = agentesRepository.remove(req.params.id);

    if (!removido) {
        return res.status(404).json({ message: "Agente não encontrado." });
    }

    res.status(204).send();
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const date = new Date(dateString);
    const now = new Date();
    return date instanceof Date && !isNaN(date) && date <= now;
}

module.exports = {
    listarAgentes,
    buscarAgentePorId,
    cadastrarAgente,
    atualizarAgente,
    atualizarParcialAgente,
    removerAgente
};
