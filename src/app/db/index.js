const { Pool, Client } = require("pg");
const connectionString = "postgres://user:password@127.0.0.1:5432/dockerDb";

const pool = new Pool({
  user: "user",
  host: "127.0.0.1",
  database: "dockerDb",
  password: "password",
  port: 5432
});

const client = new Client({
  user: "user",
  host: "127.0.0.1",
  database: "dockerDb",
  password: "password",
  port: 5432
});

const createBd = async () => {
  // Create table
  const createTableText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TEMP TABLE IF NOT EXISTS users (
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
