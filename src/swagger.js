const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Mercado Pago Checkout Pro",
    version: "1.0.0",
    description: "API with integration to Mercado Pago Checkout Pro",
  },
  tags: [
    {
      name: "Checkout",
      description: "Endpoint related to checkout",
    },
    {
      name: "Webhook",
      description: "Endpoint related to the webhook",
    },
  ],
  paths: {
    "/checkout": {
      get: {
        tags: ["Checkout"],
        summary: "Returns checkout pro link",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
    "/webhook": {
      post: {
        tags: ["Webhook"],
        summary: "Receives a webhook with payment information",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
  },
};

export default swaggerDocument;
