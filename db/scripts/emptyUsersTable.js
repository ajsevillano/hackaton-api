import query from '../index.js';

const truncateQuery = `TRUNCATE TABLE  users`;

async function emptyUsersTable() {
  const res = await query(truncateQuery);
  console.log(res);
}

emptyUsersTable();
