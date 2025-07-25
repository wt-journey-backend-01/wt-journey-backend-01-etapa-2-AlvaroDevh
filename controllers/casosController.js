const casosRepository = require("../repositories/casosRepository")
const { v4: uuidv4 } = require("uuid");

//GET /casos → Lista todos os casos registrados.
function getAllCasos(req, res) {

        const casos = casosRepository.findAll()
        res.json(casos)
}

//GET /casos/:id → Retorna os detalhes de um caso específico.
function getCasoID(req, res) {
        const id = req.params.id;
        const caso = casosRepository.casoID(id);

        if (!caso) {
                return res.status(404).json({ message: "Caso não encontrado" });
        }

        res.status(200).json(caso);
}
//POST /casos → Cria um novo caso com os seguintes campos:
function cadastrarCaso(req, res) {

        const { titulo, descricao, status, agente_id } = req.body;

        if (!titulo || !descricao || !status || !agente_id) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        if (status !== "aberto" && status !== "solucionado") {
                return res.status(400).json({ message: 'Status deve ser "aberto" ou "solucionado".' });
        }

        const novoCaso = {
                id: uuidv4(),
                titulo,
                descricao,
                status,
                agente_id
        };
        casosRepository.cadastrarCaso(novoCaso);
        res.status(201).json(novoCaso);

}

//PUT /casos/:id → Atualiza os dados de um caso por completo.

function editarCaso(req, res) {
    const id = req.params.id;
    const { titulo, descricao, status, agente_id } = req.body;

    if (!titulo || !descricao || !status || !agente_id) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    if (status !== "aberto" && status !== "solucionado") {
        return res.status(400).json({ message: 'Status deve ser "aberto" ou "solucionado".' });
    }

    const caso = casosRepository.casoID(id);
    if (!caso) {
        return res.status(404).json({ message: 'Caso não encontrado.' });
    }

    caso.titulo = titulo;
    caso.descricao = descricao;
    caso.status = status;
    caso.agente_id = agente_id;

    res.status(200).json(caso);
}

function atualizarParcialCaso(req, res) {
    const id = req.params.id;
    const caso = casosRepository.casoID(id);

    if (!caso) {
        return res.status(404).json({ message: 'Caso não encontrado.' });
    }

    const { titulo, descricao, status, agente_id } = req.body;

    if (titulo !== undefined) caso.titulo = titulo;
    if (descricao !== undefined) caso.descricao = descricao;
    if (status !== undefined) {
        if (status !== "aberto" && status !== "solucionado") {
            return res.status(400).json({ message: 'Status deve ser "aberto" ou "solucionado".' });
        }
        caso.status = status;
    }
    if (agente_id !== undefined) caso.agente_id = agente_id;

    res.status(200).json(caso);
}


function deletarCaso(req, res) {
    const id = req.params.id;
    const index = casosRepository.findIndexById(id);

    if (index === -1) {
        return res.status(404).json({ message: 'Caso não encontrado.' });
    }

    casosRepository.deletarPorIndice(index);
    res.status(204).send(); 
}

 

module.exports = {
        getAllCasos,
        getCasoID,
        cadastrarCaso,
        editarCaso,
        atualizarParcialCaso,
        deletarCaso
}

