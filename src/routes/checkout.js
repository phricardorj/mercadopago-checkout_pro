import { Router } from "express";
import { pool } from "../configuration/configuration.js";
import createPreference from "../utils/mercadoPago.js";
import generateOrderNumber from "../utils/order.js";
import moment from "moment";
import "moment-timezone";
const router = Router();

// Definir o fuso horário para Brasília
moment.tz.setDefault("America/Sao_Paulo");

router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      throw new Error("O username e o email devem ser fornecidos");
    }

    const orderNumber = generateOrderNumber();
    const status = "pending";
    const status_detail = "pending";
    const date = moment().format("DD/MM/YYYY HH:mm:ss");

    //Obtendo link do checkout pro
    const checkoutLink = await createPreference(orderNumber);
    const objectResponse = { link: checkoutLink };

    // Salvar o checkoutLink no PostgreSQL
    pool.query(
      "INSERT INTO orders (orderNumber, username, email,  status, status_detail, date) VALUES ($1, $2, $3, $4, $5, $6)",
      [orderNumber, username, email, status, status_detail, date],
      (error, results) => {
        if (error) {
          console.error("Erro ao salvar no PostgreSQL:", error);
          res.status(500).send("Erro ao criar preferência.");
        } else {
          res.send(objectResponse);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao criar preferência.");
  }
});

export default router;
