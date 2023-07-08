import pg from "pg";
import dotenv from "dotenv";
import mercadopago from "mercadopago";

dotenv.config();

const { Pool } = pg;
const port = process.env.PORT || 3000;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "postgresql://postgres:postgres@localhost:5432/payment_db";

// Configuração do Mercado Pago
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

// Conexão com Banco de Dados
const pool = new Pool({
  connectionString: DB_CONNECTION_STRING,
});

export { pool, port };
