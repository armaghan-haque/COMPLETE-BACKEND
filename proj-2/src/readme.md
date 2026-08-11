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
