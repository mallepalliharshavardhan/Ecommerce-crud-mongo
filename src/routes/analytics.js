const express = require('express');
const router = express.Router();

 

router.get("/sales-by-customer", async(req,res)=>{
try {
    const db =req.app.locals.db;

    const result = await db.collection("orders").
    aggregate([
        {$group:{
            _id:"$customerId",
            totalSales:{$sum:"$totalAmount"},
            orderCount:{$sum:1}
        }},{$sort:{totalSales:-1}}
    ]).toArray();

    res.json(result);
    
} catch (error) {
    console.log( error);
    res.status(500).json({message:"failed to fetch sales summary"});
}
})

module.exports =router ;