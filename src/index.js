import express from "express";
import { PORT } from "./configuration/configuration.js";
import "./database/database.js";
import checkoutRouter from "./routes/checkout.js";
import webhookRouter from "./routes/webhook.js";
import moment from "moment";
import "moment-timezone";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.js";

// Defining time zone for Brasilia Standard
moment.tz.setDefault("America/Sao_Paulo");

const app = express();
app.use(express.json());
app.use("/checkout", checkoutRouter);
app.use("/webhook", webhookRouter);

// Configuring the Swagger route
const options = {
  swaggerDefinition: swaggerDocument,
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(({ originalUrl }, res, next) =>
  originalUrl === "/" ? res.redirect("/api-docs") : next()
);

app.listen(PORT, () => {
  console.log(`Server started successfully`);
});
