let agentes = [
  {
    id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
    nome: "Rommel Carneiro",
    dataDeIncorporacao: "1992-10-04",
    cargo: "delegado"
  }
];

function findAll() {
    return agentes;
}

function findById(id) {
    return agentes.find(a => a.id === id);
}

function create(data) {
    agentes.push(data);
    return data;
}

function update(id, novoAgente) {
    const index = agentes.findIndex(a => a.id === id);
    if (index === -1) return null;

    agentes[index] = { ...agentes[index], ...novoAgente };
    return agentes[index];
}

function updatePartial(id, atualizacao) {
    const index = agentes.findIndex(a => a.id === id);
    if (index === -1) return null;

    agentes[index] = { ...agentes[index], ...atualizacao };
    return agentes[index];
}

function remove(id) {
    const index = agentes.findIndex(a => a.id === id);
    if (index === -1) return null;

    agentes.splice(index, 1);
    return true;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    updatePartial,
    remove
};
