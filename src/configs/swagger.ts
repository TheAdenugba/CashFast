import swaggerJsDoc from "swagger-jsdoc";
import  env  from "./env";


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "2.0.0",
      title: "cashFast Service API Endpoints",
      contact: { name: "Amadi Austin Chukwuemeka" },
      servers: [{ url: `http://localhost:${env.port}` }],
    },
  },
  apis: ["./src/swaggerDocs/**/*.yml"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export = swaggerSpec;
