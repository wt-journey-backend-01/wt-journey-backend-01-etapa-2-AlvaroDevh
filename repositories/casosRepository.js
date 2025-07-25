const casos = [
  {
    id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
    titulo: "Homicídio",
    descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
    status: "aberto",
    agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
  },
  {
    id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
    titulo: "Roubo",
    descricao: "Um estabelecimento comercial foi assaltado às 02:15 do dia 15/03/2022, com prejuízo estimado em R$ 10.000,00.",
    status: "em andamento",
    agente_id: "98765432-1098-7654-3210-987654321098"
  },
  {
    id: "6c7d8e9f-0a1b-2c3d-4e5f-6g7h8i9j0k1l2",
    titulo: "Furto",
    descricao: "Um veículo foi furtado às 18:00 do dia 20/02/2023, na região do bairro São Francisco.",
    status: "aberto",
    agente_id: "54321098-7654-3210-9876-543210987654"
  },
  {
    id: "3b4c5d6e-7f8g-9h0i-j1k2-l3m4n5o6p7q8",
    titulo: "Lesão Corporal",
    descricao: "Uma briga foi registrada às 23:45 do dia 05/01/2024, resultando em lesões corporais em duas pessoas.",
    status: "em andamento",
    agente_id: "21987654-3210-9876-5432-109876543210"
  },
  {
    id: "9a8b7c6d-5e4f-3d2c-1b0a-9a8b7c6d5e4f",
    titulo: "Dano Material",
    descricao: "Um prédio público foi vandalizado às 03:00 do dia 12/06/2022, com prejuízo estimado em R$ 5.000,00.",
    status: "aberto",
    agente_id: "76543210-9876-5432-1098-765432109876"
  }
];


function listarCasos() {
    return casos
}

function casoID(id){
    return casos.find(caso => caso.id === id);
}

function cadastrarCaso(novoCaso) {
    casos.push(novoCaso);
}

function findIndexById(id) {
    return casos.findIndex(c => c.id === id);
}

function deletarPorIndice(index) {
    casos.splice(index, 1);
}

function findByAgenteId(agente_id) {
    return casos.filter(caso => caso.agente_id === agente_id);
}


module.exports = {
    listarCasos,
    casoID, 
    cadastrarCaso,
    findIndexById,
    deletarPorIndice,
    findByAgenteId
}
