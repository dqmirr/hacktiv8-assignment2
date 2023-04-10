const router = require("express").Router();
const teachersRouter = require("./teachersRouter")
const usersRouter = require("./usersRouter")
const authentication = require("../auth/authentication")

router.use("/users", usersRouter)

router.use(authentication)
router.use("/teachers", teachersRouter)

module.exports = router