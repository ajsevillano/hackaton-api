import query from '../index.js';
const sqlString = `DROP TABLE users;`;

async function deleteUsersTable() {
  const res = await query(sqlString);
  console.log('table users deleted', res);
}

deleteUsersTable();
