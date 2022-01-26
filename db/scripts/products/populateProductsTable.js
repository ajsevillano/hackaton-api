import query from '../../index.js';
import { products } from '../../mockdata/mockdata-products.js';

async function populateProductsTable() {
  for (let index = 0; index < products.length; index++) {
    const { category, brand, name, status, favorite } = products[index];

    //Current time when data is added.
    const timestamp = 'now()';

    //SQL to populate the table.
    const sqlString = `INSERT into products (category,brand,name,status,favorite,timestamp) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
    const response = await query(sqlString, [
      category,
      brand,
      name,
      status,
      favorite,
      timestamp,
    ]);
    console.log(response);
  }
}

populateProductsTable();
