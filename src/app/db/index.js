const { Pool, Client } = require("pg");
const cString = "postgres://postgres:PASSWORD@postgres/postgres";

const pool = new Pool({
  connectionString: cString
});

const client = new Client({
  connectionString: cString
});

const createBd = async () => {
  // Create table
  const createTableText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      data JSONB
    );
  `;

  await client.connect();
  // create our temp table

  await client.query(createTableText);

  console.log("Db created");
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  createBd: () => createBd()
};
