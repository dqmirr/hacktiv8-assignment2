const teachersController = require("../controllers/teachersController");
const router = require("express").Router();

router.get("/", teachersController.getAllTeachers)

module.exports = router