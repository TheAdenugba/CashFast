import { Router } from "express";
import { users } from "../controllers";
import { validate } from "../middlewares";
import validator from "../validators/users";

const routes = Router();

routes.get("/", users.welcomeText);

export default routes;
