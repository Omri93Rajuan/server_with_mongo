import express, { IRouter, Request, Response } from "express";
import { login } from "../services/authService";

const router: IRouter = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
    try{
      const user = req.body
      const RealUser = await login(user)
      console.log(RealUser);
      
      res.json(RealUser);
    } catch (error: any) {
      console.error(error.message);
    }
  });


export default router;
