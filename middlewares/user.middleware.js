const check = (req,res,next)=>{
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email

    if(username && password && email){
        next()
    }
    else{
        res.send({error:"all fields are required"})
    }
}

const checkagain = (req,res,next)=>{
    let username = req.body.username
    let password = req.body.password
    if(username && password){
        next()
    }
    else{
        res.send({error:"all fields are required"})
    }
}

module.exports = {check,checkagain}