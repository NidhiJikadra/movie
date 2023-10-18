const express = require("express")
const router = require("./routes/user.route")
const movie = require("./routes/movie.route")
const connect = require("./config/db")
const app = express()
app.use(express.json())
app.use(router)
app.use(movie)

app.listen(8090,()=>{
    console.log("Server is listening...");
    connect()
})