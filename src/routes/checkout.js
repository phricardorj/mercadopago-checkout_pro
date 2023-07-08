import { Router } from "express";
import { POOL } from "../configuration/configuration.js";
import createPreference from "../utils/mercadoPago.js";
import generateOrderNumber from "../utils/order.js";
import moment from "moment";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { username, email, items } = req.body;

    if (!username || !email || !items || !Array.isArray(items)) {
      throw new Error(
        "O username, email e uma lista de itens devem ser fornecidos"
      );
    }

    for (const item of items) {
      if (
        typeof item.title !== "string" ||
        typeof item.unit_price !== "number" ||
        typeof item.quantity !== "number" ||
        item.unit_price <= 0 ||
        item.quantity <= 0
      ) {
        throw new Error(
          "Cada item deve ter 'title' (string), 'unit_price' (number) e 'quantity' (number) com valores maiores que zero"
        );
      }
    }

    const orderNumber = generateOrderNumber();
    const status = "pending";
    const status_detail = "pending";
    const date = moment().format("DD/MM/YYYY HH:mm:ss");

    // Obtendo link do checkout pro
    const checkoutLink = await createPreference(orderNumber, items);
    const objectResponse = { link: checkoutLink };

    // Salvar o checkoutLink no PostgreSQL
    POOL.query(
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
