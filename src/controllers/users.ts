import { Request, Response } from "express";
import { users } from "../services";
import { response } from "../helpers";

const welcomeText = async (req: Request, res: Response): Promise<void> => {
  const data = await users.welcomeText();
  return response(res, data);
};

export = {
  welcomeText,
};
