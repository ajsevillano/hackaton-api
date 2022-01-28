import pg from 'pg';
import dbConfig from './dbConfig.js';

const pool = new pg.Pool({
  // user: dbConfig.user,
  // host: dbConfig.host,
  // database: dbConfig.database,
  // password: dbConfig.password,
  // port: dbConfig.port,
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
