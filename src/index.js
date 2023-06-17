import express from "express";
import { port } from "./configuration/configuration.js";
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

app.listen(port, () => {
  console.log(`Server started successfully`);
});
