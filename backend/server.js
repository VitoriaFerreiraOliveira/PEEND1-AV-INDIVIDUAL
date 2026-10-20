const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let treinamentos = [
  {
    id: 1,
    titulo: 'Integração de Cultura Corporativa',
    cargo: 'Todos os Cargos',
    cargaHoraria: '4h',
    data: '2026-11-10',
    linkMaterial: 'https://empresa.com/integracao',
    descricao: 'Apresentação da missão, visão, valores e regras internas.'
  },
  {
    id: 2,
    titulo: 'Segurança da Informação e LGPD',
    cargo: 'Analista de TI',
    cargaHoraria: '2h',
    data: '2026-11-15',
    linkMaterial: 'https://empresa.com/lgpd',
    descricao: 'Orientações sobre criação de senhas e proteção de dados.'
  }
];

app.get('/api/treinamentos', (req, res) => {
  res.json(treinamentos);
});

app.post('/api/treinamentos', (req, res) => {
  const novoTreinamento = { id: Date.now(), ...req.body };
  treinamentos.push(novoTreinamento);
  res.status(201).json(novoTreinamento);
});

app.put('/api/treinamentos/:id', (req, res) => {
  const { id } = req.params;
  const index = treinamentos.findIndex(t => t.id == id);

  if (index !== -1) {
    treinamentos[index] = { id: Number(id), ...req.body };
    return res.json(treinamentos[index]);
  }
  res.status(404).json({ mensagem: 'Treinamento não encontrado.' });
});

app.delete('/api/treinamentos/:id', (req, res) => {
  const { id } = req.params;
  treinamentos = treinamentos.filter(t => t.id != id);
  res.json({ mensagem: 'Treinamento removido com sucesso.' });
});

app.listen(4000, () => {
  console.log('Servidor Express a rodar na porta 4000');
});