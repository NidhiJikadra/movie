const {Router} = require("express")
const { home, signup, del, login, getusers } = require("../controllers/user.controller")
const { check, checkagain } = require("../middlewares/user.middleware")
const router = Router()

router.get("/",home)
router.post("/user/signup",check,signup)
router.post("/user/login",checkagain,login)
router.delete("/user/delete/:id",del)
router.get("/user/",getusers)

module.exports = router