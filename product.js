// we creat CRUD request here and pass to app.js by export import and from there it get pass to server.js by export/import

const express = require("express");
const router = express.Router();
const mongoose = require ('mongoose');

const Product = require ('./model/product')
const productcontroller = require ('./controller/product.model')

// 1. Code to handle GET request for all products
router.get("/",productcontroller.getproducts )
//  (req, res) => {
//   res.status(200).json({
//     msg: "This is GET request for products",
//   });
// });

// 2. Code to handle POST request for all products
router.post("/", productcontroller.creatproduct)
  
//     (req, res) => {

//   using body-parser middleware here
//   body parser make this will make the following property available
//     console.log(req.body)
//     console.log(req.body.name)
//     console.log(req.body.price)

//        /// mongoose data creation 
//         // 1. model ceration
//        const product = new Product ({
//         _id : new mongoose.Types.ObjectId(),
//         name : req.body.name,
//         price : req.body.price
//        })
        
//         // 2. save this model to data base
//        product.save()
//        .then((res)=>{
//         console.log(res)
//        })
//        .catch((err)=>{
//         console.log(err)
//        })


//     const tempproduct={
//       name : req.body.name,
//       price : req.body.price
//     }

//       const p = req.body

//   res.status(200).json({
//     msg: "This is POST request for products",
//     statusmsg:"product created sucessfully",
//     product:product
//   });
// });

// 3.code to handle GET request for single product
// router.get('/:productid',(req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single product"
//     })
// })

router.get("/:productid",productcontroller.getproduct )
//   (req, res) => {
//   const id = req.params.productid;
//   if (id == "7") {
//     res.status(200).json({
//       msg: "congrats : you have special id with cash back",
//     });
//   } else {
//     res.status(200).json({
//       msg: "opps : you have regular id with no cash back",
//     });
//   }
// });

// 4. code to handle PUT request
router.put("/:productid", productcontroller.uptadeproduct)
//  (req, res) => {
//     const id = req.params.productid
//   res.status(200).json({
//     msg: "This is PUT request for single product",
//     id : id
//   });
// });

// 5. code to handle DELETE request
router.delete("/:productid", productcontroller.deletproduct)
//  (req, res) => {
//     const id = req.params.productid
//   res.status(200).json({
//     msg: "This is DELET request for single product",
//     id : id
//   });
// });

module.exports = router;
