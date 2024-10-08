import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import cors from "cors";
import path from 'path';
import formData from "express-form-data";
import swaggerUi from "swagger-ui-express";
import requestIp from 'request-ip';


import routes from "./routes";
import { env, swagger, db } from "./configs";
import { security } from "./middlewares";
import { response } from "./helpers";

const app = express();
const server = http.createServer(app);
const { port } = env;

db.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(formData.parse());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(
  cors({
    allowedHeaders: ["Content-Type", "authorization", "X-access-token"],
  })
);
// Middleware to get IP address
app.use(requestIp.mw());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

app.use(security);
app.use("", routes);
app.use((err: any, req: any, res: any, next: any) => {
  return response(
    res,
    { status: false, message: "Internal server error" },
    500
  );
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(
      `cashFast Service! is running on http://localhost:${port}/api-docs`
    );
  });
}


export = app;