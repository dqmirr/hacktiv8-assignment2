const usersController = require("../controllers/usersController");
const router = require("express").Router();

router.post("/", usersController.login)

module.exports = router