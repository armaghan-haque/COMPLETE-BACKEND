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

src-> models folder -> user.model.js file
const mongoose = require('mongoose')
const { type } = require('node:os')

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password :{
        type: String,
        required: true,
    },

    role:{
        type: String,
        enum: ['user' ,'artist'],
        default: 'user'
    }
 
})

const userModel = mongoose.model('user' , userSchema)

module.exports = userModel

routes folder-> auth.routes.js

const express = require('express')

const router = express.Router()

module.exports = router

in app.js
const authRoutes = require('./routes/auth.routes')
app.use('/api/auth', authRoutes)

auth.routes.js
router.post('/register',)

src-> controllers folder -> auth.controller.js

const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

async function registerUser(req,res) {

   const {username , email , password , role = 'user'} = req.body

    const  isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists) {
        return res.status(409).json({
            message : "User already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message : "User registered successfully",
        user : {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })
}

terminal 
npm i bcryptjs

auth.controller.js
const bcrypt = require('bcryptjs')

   if(isUserAlreadyExists) {
        return res.status(409).json({
            message : "User already exists"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    module.exports = {registerUser}

auth.routes.js
const authController = require('../controllers/auth.controller')
router.post('/register', authController.registerUser)

