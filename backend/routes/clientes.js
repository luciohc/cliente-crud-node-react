const express = require('express');
const router = express.Router();
const model = require('../models/clienteModel');
const axios = require('axios');

router.get('/', async (req, res) => {
  const clientes = await model.getAllClientes();
  res.json(clientes);
});

router.get('/:id', async (req, res) => {
  const cliente = await model.getClienteById(req.params.id);
  res.json(cliente);
});

router.post('/', async (req, res) => {
  console.log('📥 Dados recebidos no backend:', req.body);
  const { nome, cidade, email } = req.body;

  if (!nome || !cidade) {
    return res.status(400).json({ erro: 'Nome e cidade são obrigatórios' });
  }

  const novo = await model.createCliente(nome, cidade, email);
  res.json(novo);
});


router.put('/:id', async (req, res) => {
   const { nome, cidade, email } = req.body;

  if (!nome || !cidade) {
    return res.status(400).json({ erro: 'Nome e cidade são obrigatórios' });
  }

  const atualizado = await model.updateCliente(req.params.id, nome, cidade, email);
  res.json(atualizado);
});

router.delete('/:id', async (req, res) => {
  await model.deleteCliente(req.params.id);
  res.sendStatus(204);
});

router.get('/:id/clima', async (req, res) => {
  const cliente = await model.getClienteById(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  // Use diretamente a chave aqui
  const apiKey = 'a5ebab9a30d29d2da7dbc66904360754'; // ou qualquer outra válida
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cliente.cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await require('axios').get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar clima:', error.response?.data || error.message);
    res.status(500).json({
      erro: 'Erro ao buscar clima',
      detalhe: error.response?.data || error.message,
    });
  }
});


module.exports = router;
