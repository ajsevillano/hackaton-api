import query from '../../index.js';

const userQuery = `CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name TEXT,
  category TEXT,
  brand TEXT,
  status INTEGER,
  favorite BOOLEAN NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;

async function createProductsTable() {
  const response = await query(userQuery);
  console.log(response);
}

createProductsTable();
