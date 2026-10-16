const {MongoClient,ObjectId} = require('mongodb');

const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri)




 async function connectDB(){
    try{
        await client.connect();
        console.log("Database connected");
        const db = client.db("ecommerce");
        console.log("DB connected",db.databaseName);
        return db;



    }catch(err){
       console.log("Mongo error",err)
    } 
}
 module.exports = connectDB