import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.js";

export function setupSwagger() {
  const setup = (app) => {
    // Configurando a rota do Swagger
    const options = {
      swaggerDefinition: swaggerDocument,
      apis: ["./routes/*.js"],
    };
    const swaggerSpec = swaggerJsdoc(options);
    app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api-docs", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
    app.use(({ originalUrl }, res, next) =>
      originalUrl === "/" ? res.redirect("/swagger-ui") : next()
    );
  };

  return { setup };
}
