const mongoose = require("mongoose")

const movieschema = new mongoose.Schema({
title:String,
  description:String,
  releaseDate:String,
  category:String,
  actors: [{ name: String }],
  image:String,
  ratings:[
    {
      value:Number,
      // min:0,
      // max:10,
    },
  ],
  comments: [
    {
      text:String,
    },
  ],
  addedBy: String,
})

const Moviemodel = new mongoose.model("Movie",movieschema)

module.exports = Moviemodel