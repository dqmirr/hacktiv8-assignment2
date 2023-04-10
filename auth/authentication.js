const { verifyToken } = require('../helpers/jwt')
const fs = require("fs")
const  users = require("../data/users.json")

const authentication = async (req,res,next) =>{
    try {
        const accessToken = req.headers.access_token
    if(!accessToken){
        throw{
            code:401,
            message:"Token not provided"
        }
    }

    const decode = verifyToken(accessToken)
    
    const user = () =>{
        users.id === decode.id && users.username === decode.username
    }
    
    if (!user){
        throw{
            code:401,
            message:"user not found"
        }
    }

    req.UserData = {
        id: user.id,
        username: user.username
    }

    next()
    } catch (error) {
    res.status(error?.code||500).json(error)    
    }
    
}

module.exports = authentication