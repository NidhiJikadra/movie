const Users = require("../models/user.schema")

const home = (req,res)=>{
    res.status(200).send("Welcome to the movie API")
}

const signup = async(req,res)=>{
    let data = await Users.findOne({email:req.body.email})

    if(data){
        return res.status(201).send(data)
    }
    else{
        let newuser = await Users.create(req.body)
        return res.status(201).send(newuser)
    }
}

const login = async(req,res)=>{
    let data = await Users.findOne({username:req.body.username,password:req.body.password})
    if(data){
        res.status(200).send({message:'Logged in successfully'})
    }
    else{
        res.status(401).send({error:"Invalid username or password"})
    }
}

const del = async(req,res)=>{
    let {id} = req.params
    let data = await Users.findByIdAndDelete(id)
    res.status(200).send({'message': 'User deleted successfully'})
}

const getusers = async(req,res)=>{
    let data = await Users.find()
    res.send(data)
}
module.exports = {home,signup,del,login,getusers}