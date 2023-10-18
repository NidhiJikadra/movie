const Moviemodel = require("../models/movie.schema")

const create = async(req,res)=>{
    let data = await Moviemodel.create(req.body)
    res.status(201).send(data)
}

const del = async(req,res)=>{
    let data = await Moviemodel.findByIdAndDelete(req.params.id)
    res.send({message:"Movie deleted"})
}

const updatedmovie = async(req,res)=>{
    let {id} = req.params
    let updateData = await Moviemodel.findByIdAndUpdate(id,req.body)
    res.send({title: "Updated Movie Title"})
}

const rating = async(req,res)=>{
    let data = await Moviemodel.findById(req.params.id)
    if (data){
       let movie = await Moviemodel.findByIdAndUpdate(req.params.id,req.body)
       res.send({movie})
    }
    else{
        res.send({error:"movie not found"})
    }
}

const comment = async(req,res)=>{
    let data = await Moviemodel.findById(req.params.id)
    if (data){
       let movie = await Moviemodel.findByIdAndUpdate(req.params.id,req.body)
       res.send({movie})
    }
    else{
        res.send({error:"movie not found"})
    }
}

const filtered = async(req,res)=>{
    let data  = await Moviemodel.find(req.query)
    res.send(data)
}

module.exports = {create,del,rating,comment,filtered,updatedmovie}