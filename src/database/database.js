import { pool } from "../configuration/configuration.js";

// Etapa 1: Conexão com o PostgreSQL e criação das tabelas
pool.connect((err, client, done) => {
  if (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err);
  } else {
    console.log("Conectado ao banco de dados PostgreSQL");

    // Etapa 2: Criação da tabela "Orders" se ela não existir
    const createOrdersTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      orderNumber BIGINT NOT NULL,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      status_detail VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL
    )`;

    client.query(createOrdersTableQuery, (error, result) => {
      if (error) {
        console.error("Erro ao criar a tabela 'Orders':", error);
      } else {
        console.log("Tabela 'Orders' criada ou já existe.");

        // Etapa 3: Libera o cliente do pool de conexão
        done();
      }
    });
  }
});
