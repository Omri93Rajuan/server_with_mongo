import express, { Express } from 'express'
import "dotenv/config";
import router from './router/router';
import mongoose from 'mongoose';

const app:Express = express()

app.use(express.json());
app.use(router)

  
  app.use(express.json());
  app.use("/api", router);
  

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`listening on: http://localhost:${process.env.PORT || 8000}`);   
})



// mongoose.connect(process.env.MONGO_URI || "")
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));