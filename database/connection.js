const  Mongoose = require("mongoose");

const DB  = process.env.DATABASE;


Mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection SuccesFull")
}).catch((err)=>{
    console.log("MongoConnection Error")
    console.log(err)
})
