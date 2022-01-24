import query from '../index.js';

const truncateQuery = `TRUNCATE TABLE users RESTART IDENTITY`;

async function emptyUsersTable() {
  const res = await query(truncateQuery);
  console.log(res);
}

emptyUsersTable();
