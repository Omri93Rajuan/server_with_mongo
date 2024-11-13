import express, { Express } from 'express'
import "dotenv/config";
import router from './router/router';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app:Express = express()


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
}));


app.use(express.json());
app.use(cookieParser())
app.use(router)

mongoose.connect(process.env.MONGO_URI || "")
.then(()=>console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error("Error connecting to MongoDB:", error));
  
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`listening on: http://localhost:${process.env.PORT || 8000}`);   
})
