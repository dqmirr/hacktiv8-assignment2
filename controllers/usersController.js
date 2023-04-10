const { generateToken } = require("../helpers/jwt")

const users = require("../data/users.json");

class usersController{
static async login(req,res,next) {
    try {
    const {
        username,
        password
      } = req.body

users.forEach(obj => { 
  if (obj.username === username && obj.password === password) {
    const response = {
        id:obj.id,
        username:obj.username
    }
    
    const access_token = generateToken(response)
      
            res.status(200).json({
                access_token
            })
    }else{
        res.end({
            message:"Incorrect credentials"
        })
    }
})


} catch (error) {
    res.status(error?.code || 500).json(error)
        }
    }
}

module.exports = usersController