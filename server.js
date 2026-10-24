const connectDB = require('./config/db');
const express = require('express')
const analyticsRoutes= require('./src/routes/analytics')

const app = express();


app.use(express.json());
app.use("/api/analytics",analyticsRoutes)
const port = 5000;

app.get("/", (req,res)=>{
  res.send("Ecommerce API is running ")
})

async function startServer(){
   

    try{
          const  db = await connectDB();
          // Make the connected database available to routes
          
          app.locals.db = db;

    app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
    }catch(err){
        console.log(err);
    }

    
}
startServer();




 