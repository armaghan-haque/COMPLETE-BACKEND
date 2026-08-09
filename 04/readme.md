 npm init -y
 npm i express mongoose
 npm i dot env
 src folder->app.js
 const express = require('express')

const app = express()
app.use(express.json()) //middleware

module.exports = app

Server.js
const app = require('./src/app')

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
}) 

src folder -> db folder -> db.js

const mongoose = require('mongoose')


async function connectDB(){

    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfully')

    } catch (err) {
        
        console.error('Database connection error ' , err)
    }
}
module.exports = connectDB

Server.js
const connectDB = require('./src/db/db')
require('dotenv').config()

connectDB()

.env file
MONGO_URI=database string


src folder-> models folder-> user.model.js file

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel

//src folder -> routes folder -> auth.routes.js

const express = require('express')
const router = express.Router()

router.post('/register',)

module.exports = router

src folder -> controllers folder -> auth.controller.js file 
const userModel = require('../models/user.model')

async function registerUser(req , res) {

    const {username , email , password } = req.body
}


module.exports = { registerUser }

auth.routes.js
const authController = require('../controllers/auth.controller')

router.post('/register',authController.registerUser)

app.js

const authRoutes = require('./routes/auth.routes')
app.use('/api/auth', authRoutes)


auth.controller.js
    const user = await userModel.create({
        username,email,password
    })

npm i jsonwebtoken

const jwt = require('jsonwebtoken')

    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET) 

 generate JWT Secret Key and paste it in .env file

     res.send(201).json({
        message : "User registered successfully",
        user,
        token
    })


  postman 
  post
  {
    "username" : "test_username",
    "email" : "test@test.com",
    "password" : "test"
}     

npm i cookie-parser
app.js
const cookieParser = require('cookie-parser')
app.use(cookieParser())

auth,controller.js
remove token from res.status and
    res.cookie('token' , token)


  the problem with this is we can regiter the user with same email address but it doesnt happen in real life therefore we are updating the userschema code to

    email : {
        type: String,
        unique: true
    },

  updatiing auth.controller.js 
     const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message : "user already exists"
        })
    }

    creating a dummy route post.routes.js
    const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/create' , (req,res)=>{

    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try {
        jwt.verify(token , process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
             message : "token is invalid"
        })
    }

    res.send("post created successfuly")
})

module.exports = router

in app.js
add
const postRoutes = require('./routes/post.routes')
app.use('/api/post', postRoutes)



