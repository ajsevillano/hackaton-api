import query from '../index.js';
import { users } from '../mockdata.js';

async function populateUsersTable() {
  for (let index = 0; index < users.length; index++) {
    const { first_name, last_name, email, gender, ip_address } = users[index];

    //Current time when data is added.
    const timestamp = 'now()';

    //SQL to populate the table.
    const sqlString = `INSERT into users (first_name,last_name,email,gender,ip_address,timestamp) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
    const response = await query(sqlString, [
      first_name,
      last_name,
      email,
      gender,
      ip_address,
      timestamp,
    ]);
    console.log(response);
  }
}

populateUsersTable();
