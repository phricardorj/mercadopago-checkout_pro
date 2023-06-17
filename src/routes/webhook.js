import { Router } from "express";
import { pool } from "../configuration/configuration.js";
import mercadopago from "mercadopago";
import moment from "moment";
import "moment-timezone";

const router = Router();

// Definir o fuso horário para Brasília
moment.tz.setDefault("America/Sao_Paulo");

router.post("/", async (req, res) => {
  try {
    const payment = req.query;

    if (payment.type === "payment") {
      const { response } = await mercadopago.payment.findById(
        payment["data.id"]
      );

      const orderNumber = Number(response.external_reference);
      const status = response.status;
      const status_detail = response.status_detail;
      const date_created = moment().format("DD/MM/YYYY HH:mm:ss");

      pool.query(
        "UPDATE orders SET status = $1, status_detail = $2, date = $3 WHERE orderNumber = $4",
        [status, status_detail, date_created, orderNumber],
        (error, results) => {
          if (error) {
            console.error("Erro ao atualizar ORDER no PostgreSQL:", error);
            res.status(500).send("Erro ao atualizar ORDER.");
          } else {
            res.send("Pedido atualizado com sucesso!");
          }
        }
      );
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
});

export default router;
