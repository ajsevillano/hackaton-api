import query from '../../index.js';

const userQuery = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  gender TEXT,
  ip_address TEXT,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;

async function createUserTable() {
  const response = await query(userQuery);
  console.log(response);
}

createUserTable();
