import express, { IRouter, NextFunction }  from 'express'
import dataContoller from "../src/controllers/dataContoller"
import authController from "../src/controllers/authController"
import { verifyAdmin, verifyUser } from '../helpers/jwt';

const router:IRouter = express.Router()

router.use("/data",verifyUser as NextFunction,dataContoller );
router.use("/admin-role",verifyAdmin as NextFunction,dataContoller );
router.use("/auth",authController );



export default router