const express = require('express');
const router = express.Router();



router.get("/sales-by-customer", async (req, res) => {
    try {
        const db = req.app.locals.db;

        // const result = await db.collection("orders").
        //     aggregate([
        //         {
        //             $match:
        //                 { status: "Delivered" }
        //         },
        //         {
        //             $group: {
        //                 _id: "$customerId",
        //                 TotalSales: { $sum: "$totalAmount" },
        //                 orderCount: { $sum: 1 }
        //             }
        //         }, {
        //             $sort: { TotalSales: -1 }
        //         }
        //     ]).toArray();

        // Requirement 1: Return only customers whose total sales from Delivered orders exceed ₹20,000, with the highest sales first.


        // const result = await db.collection("orders").
        //     aggregate([
        //         {
        //             $match:{ 
        //                 status:"Delivered"
        //             }
        //         },
        //         {$group:
        //             {
        //                  _id:"$customerId",
        //                  totalSales:{$sum:"$totalAmount"},
        //                  DeliveredOrders:{$sum:1}


        //             }
        //         },
        //          {$match:{ 
        //             totalSales: {$gt:20000}
        //          }},
        //         {$sort:{totalSales:-1}}
        //     ]).toArray();

//  requirement 2: Return customers whose delivered sales exceed ₹50,000, showing only:
// - customerId
// - totalSales

     const result = await db.collection("orders").
            aggregate([
                {
                    $match:{ 
                        status:"Delivered"
                    }
                },
                {$group:
                    {
                         _id:"$customerId",
                         totalSales:{$sum:"$totalAmount"},
                         


                    }
                },
                 {$match:{ 
                    totalSales: {$gt:50000}
                 }},
                {$sort:{totalSales:-1}}
            ]).toArray();

        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to fetch sales summary" });
    }
})

module.exports = router;