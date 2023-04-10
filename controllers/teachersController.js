const teachers = require("../data/teachers.json")

class teachersController {
    static getAllTeachers (req,res) {
        try {
            res.send(teachers)  
        } catch (error) {
            res.status(error?.code || 500).json(error)
        } 
}
}
module.exports = teachersController