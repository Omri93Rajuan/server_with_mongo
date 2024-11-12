import express, { IRouter }  from 'express'
import dataContoller from "../src/controllers/dataContoller"
import authController from "../src/controllers/authController"

const router:IRouter = express.Router()

router.use("/data",dataContoller );
router.use("/auth",authController );



export default router