const mongoose = require("mongoose")

const connect = async()=>{
    await mongoose.connect("mongodb+srv://nidhijikadra3103:nidhi3103@cluster0.gxrsra9.mongodb.net/?retryWrites=true&w=majority")
    console.log("DB Connected");
}

module.exports = connect
