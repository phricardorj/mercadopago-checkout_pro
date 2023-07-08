import express from "express";
import { PORT } from "./configuration/configuration.js";
import "./database/database.js";
import checkoutRouter from "./routes/checkout.js";
import webhookRouter from "./routes/webhook.js";
import moment from "moment";
import "moment-timezone";
import { setupSwagger } from "./setupSwagger.js";

// Definindo o fuso horário para o padrão de Brasília
moment.tz.setDefault("America/Sao_Paulo");

const app = express();
const swagger = setupSwagger();
swagger.setup(app);

app.use(express.json());
app.use("/checkout", checkoutRouter);
app.use("/webhook", webhookRouter);

app.listen(PORT, () => {
  console.log(`Servidor iniciado com sucesso`);
});
