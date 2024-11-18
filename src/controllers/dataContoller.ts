import express, { IRouter, Request, Response } from "express";
import { 
    addUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser 
} from "../services/dataService";
import { handleError } from "../../utils/ErrorHandle";

const router: IRouter = express.Router();

// Get all users
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

// Get user by ID
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await getUserById(req.params.id);
        res.json(user);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

// Create new user
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await addUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        handleError(res, error.status || 400, error.message);
    }
});

// Update user
router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error: any) {
        handleError(res, error.status || 400, error.message);
    }
});

// Delete user
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await deleteUser(req.params.id);
        res.json(result);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

export default router;