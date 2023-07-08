import express from "express";
import { PORT } from "./configuration/configuration.js";
import "./database/database.js";
import checkoutRouter from "./routes/checkout.js";
import webhookRouter from "./routes/webhook.js";
import moment from "moment";
import "moment-timezone";

// Defining time zone for Brasilia Standard
moment.tz.setDefault("America/Sao_Paulo");

const app = express();
app.use(express.json());
app.use("/checkout", checkoutRouter);
app.use("/webhook", webhookRouter);

app.listen(PORT, () => {
  console.log(`Server started successfully`);
});
