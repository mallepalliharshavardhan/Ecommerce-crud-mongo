const connectDB = require('./config/db');
 const app = require('./app')

 
const port = 5000;

 

async function startServer(){
   

    try{
          const db = await connectDB();
          app.locals.db = db;

    app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
    }catch(err){
        console.log("failed to start server:",err);
    }

    
}
startServer();




