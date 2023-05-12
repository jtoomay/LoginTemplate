const router = require("express").Router()
const { loginUser, signUpUser } = require("../controllers/authController")

router.post("/login", loginUser)
router.post("/signup", signUpUser)
router.get("/test", (req, res) => res.send("test"))

module.exports = router
