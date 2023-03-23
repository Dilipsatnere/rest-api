
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema ({
    _id : Schema.Types.ObjectId,
    name : {type:String,require:true},
    price : {type:String,require:true}
})

// after making model structure we need to expport it

module.exports = mongoose.model("Product",productSchema)