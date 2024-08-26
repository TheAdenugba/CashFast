import { Router, Request, Response, NextFunction } from "express";
import usersRoutes from "./users";

import { response } from "../helpers";

const routes = Router();

routes.use("", usersRoutes);

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export = routes;
