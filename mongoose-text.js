const mongoose = require ('mongoose')

const uri = "mongodb+srv://dilips03378:dilip%401234@cluster0.u9fe0uo.mongodb.net/school"

mongoose.connect(uri).then(()=>{
  console.log('Connection establish successfully')
})