import pg from "pg";
import dotenv from "dotenv";
import mercadopago from "mercadopago";

dotenv.config();

const { Pool } = pg;
const port = process.env.PORT || 3000;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const secret_key = process.env.CRYPTO_SECRET_KEY || "secret_localhost";

// Configuração do Mercado Pago
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

// Conexão com Banco de Dados
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

export { pool, port, secret_key };
