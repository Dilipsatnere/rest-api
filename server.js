
require('dotenv').config()
const { log } = require('console')
const http = require ('http')

const port = process.env.port
const host = process.env.host

/// import app.js file data here to process
const app = require ('./app')

//  const server = http.createServer((req,res)=>{
//     res.write('hello')
//     res.end()
//  })

/// creat server to display app file data on server

 const server = http.createServer(app)



/// to start server
 server.listen(port,()=>{
    console.log(`server started at http://${host}:${port} `)
 })