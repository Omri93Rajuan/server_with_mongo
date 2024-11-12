import express, { IRouter }  from 'express'
import dataContoller from "../src/controllers/dataContoller"


const router:IRouter = express.Router()

router.use("/data",dataContoller );



export default router