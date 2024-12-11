import pg from "pg";
import "dotenv/config";

const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const { Client } = pg;
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: password,
  database: database,
});

client.connect();

client.query(`SELECT * FROM player_stats LIMIT 10`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
