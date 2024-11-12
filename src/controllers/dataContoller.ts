import express, { IRouter, Request, Response } from "express";
import { AddUser, allUsers } from "../services/dataService";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const all= await allUsers()
    res.json(all);
  } catch (error: any) {
    console.error(error.message);
  }
});
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    // await
    res.send("GET one data method Successfully");
  } catch (error: any) {
    console.error(error.message);
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try{
    const newUser = req.body
    const addUser = AddUser(newUser)
    res.send(addUser);
  } catch (error: any) {
    console.error(error.message);
  }
});

router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    // await
    res.send("PATCH method Successfully");
  } catch (error: any) {
    console.error(error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    // await
    res.send("DELETE method Successfully");
  } catch (error: any) {
    console.error(error.message);
  }
});

export default router;




    