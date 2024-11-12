import express, { IRouter, Request, Response } from "express";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    // await
    res.send("GET method Successfully");
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
    res.send("POST method Successfully");
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



// try {
//     const { name, email, age } = req.body;

//     const newUser: IUser = new User({
//       name,
//       email,
//       age,
//     });

//     const user = await newUser.save();
    