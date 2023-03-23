/// we are creating api in async and await way (async = step by step, await= wait until first step to be complete then start secnd step)

const mongoose = require("mongoose");
const Product = require("../model/product");

// 1. CREAT/POST method of CRUD

exports.creatproduct = async (req, res) => {
  try {
    // creat the product object
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
    });

    /// after creating data save the data
    const data = await product.save(); // it call the save method and wait for it return

    // if its reaches this point this means save() was successfullu done
    res.status(200).json({
      msg: "product created successfully",
      product: data,
    });
  } catch (err) {
    res.status(501).json({
      code: 10,
      msg: "somethng went wrong",
      error: err,
    });
  }
};

/// 2. GET/READ method of CRUD (for all data)

 exports.getproducts = async (req,res) =>{
    try{
        const product = await Product.find()  // help to read/get all data from collection
        res.status(200).json({
            msg:"All documents featched successsfully",
            data : product
        })
    } catch (err) {
        res.status(501).json({
          code: 10,
          msg: "somethng went wrong",
          error: err,
        })
    }
 }

/// 3. GET/READ method of CRUD (for single data)
 
exports.getproduct = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.productid)  // help to read/get all data from collection
        
        let n = ""
        if(product === null){
          n = "no match found"
        }else{
          n = "Document featched successsfully"
        }
        
        res.status(200).json({
            msg:n,
            data : product
        })
    } catch (err) {
        res.status(501).json({
          code: 10,
          msg: "somethng went wrong",
          error: err,
        })
    }
 }

/// 4. PUT/EDIT method of CRUD

  exports.uptadeproduct = async (req,res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.productid,req.body)  // help to update data from collection
        res.status(200).json({
            msg:"Documents updated successsfully",
            data : product
        })
    } catch (err) {
        res.status(501).json({
          code: 10,
          msg: "somethng went wrong",
          error: err,
        })
    }
 }

/// 5. DELETE method of CRUD

exports.deletproduct = async (req,res) =>{
  try{
      const product = await Product.findByIdAndDelete(req.params.productid)  // help to delet data from collection
      res.status(200).json({
          msg:"Documents deleted successsfully",
          data : product
      })
  } catch (err) {
      res.status(501).json({
        code: 10,
        msg: "somethng went wrong",
        error: err,
      })
  }
}