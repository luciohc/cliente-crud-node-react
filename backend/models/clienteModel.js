const pool = require('../database');

const getAllClientes = async () => {
  const res = await pool.query('SELECT * FROM clientes');
  return res.rows;
};

const getClienteById = async (id) => {
  const res = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
  return res.rows[0];
};

async function createCliente(nome, cidade, email) {
  const result = await pool.query(
    'INSERT INTO clientes (nome, cidade, email) VALUES ($1, $2, $3) RETURNING *',
    [nome, cidade, email]
  );
  return result.rows[0];
}


async function updateCliente(id, nome, cidade, email) {
  const result = await pool.query(
    'UPDATE clientes SET nome = $1, cidade = $2, email = $3 WHERE id = $4 RETURNING *',
    [nome, cidade, email, id]
  );
  return result.rows[0];
}


const deleteCliente = async (id) => {
  await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
