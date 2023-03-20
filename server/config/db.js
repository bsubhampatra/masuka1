const mongoose = require('mongoose');
// package.function.variable
const db = "mongodb+srv://bsubham:fIwaQ9HWCJ41q3Cl@cluster0.nh9wspj.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;
