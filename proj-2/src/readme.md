npm init -y
npm i express mongoose dotenv jsonwebtoken cookie-parser

src folder -> app.js
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

module.exports = app

server.js file
require('dotenv').config
const express = require('./src/app')

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})

db folder -> db.js file
const mongoose = require('mongoose')

async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGO_URI)

        console.log('Database connected successfully')

    } catch (error) {
       
        console.error('database connection error:',error)

    }
}

module.exports = connectDB

server.js file 
const connectDB = require('./src/db/db')

connectDB() 

.env file
MONGO_URI=string/comet

