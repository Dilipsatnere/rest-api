const express = require("express");
const app = express();
const mongoose = require ('mongoose')
 require('dotenv').config()

// app.use((req,res)=>{
//   res.status(200).json({
//       msg:"This is the simple GET request"
//   })
// })

// body-parser middleware
 const bodyparser = require ('body-parser')

   app.use(bodyparser.urlencoded({extended:true}))
   app.use(bodyparser.json({extended:true}))

// morgan middleware
const morgan = require("morgan");

app.use(morgan("dev"));

/// connection to mongo data base

// const uri = "mongodb+srv://dilips03378:dilip%401234@cluster0.u9fe0uo.mongodb.net/test"

mongoose.connect (process.env.mongoconnection)

// now to importing products data here
const productrequire = require("./product");

app.use("/products", productrequire);

// now to importing order data here
// const orderrequires = require("./order");


// app.use("/orders", orderrequires);

/// export the app data so it can be used in other file

module.exports = app;
