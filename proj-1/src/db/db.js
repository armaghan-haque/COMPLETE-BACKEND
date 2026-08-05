const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://armaghanhaque25_db_user:56NbDNVFvpdWD0XU@complete-backend.13hechy.mongodb.net/project-1")

    console.log("connected to DB")
}


module.exports = connectDB