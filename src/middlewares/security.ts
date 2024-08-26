import { Request, Response, NextFunction } from "express";
import { response } from "../helpers";

// list of non-restricted endpoints
const nonRestrictedEndPoints = ["/"];

export default async (req: Request, res: Response, next: NextFunction) => {
  if (nonRestrictedEndPoints.includes(req.path)) {
    next();
  } else {
    try {
      next();
    } catch (error) {
      console.log(error);
      return response(
        res,
        { status: false, message: "Invalid Token -G Access!" },
        401
      );
    }
  }
};
