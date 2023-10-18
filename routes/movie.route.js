const {Router} = require("express")
const { create, del, rating, comment, filtered, updatedmovie } = require("../controllers/movie.controller")

const movie = Router()

movie.post("/movie/create",create)
movie.delete("/movie/delete/:id",del)
movie.patch("/movie/update/:id",updatedmovie)
movie.patch("/movie/rating/:id",rating)
movie.patch("/movie/comment/:id",comment)
movie.get("/movie/filter",filtered)

module.exports = movie