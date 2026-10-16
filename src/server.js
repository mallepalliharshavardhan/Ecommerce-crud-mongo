const connectDB = require('./db');
const express = require('express')

const app = express();

app.use(express.json());

const port = 5000;

app.get("/", (req,res)=>{
  res.send("Ecommerce API is running ")
})

async function startServer(){
   

    try{
          const db = await connectDB();

    app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
    }catch(err){
        console.log(err);
    }

    
}
startServer();




