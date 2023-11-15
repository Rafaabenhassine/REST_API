const express =require("express");
const { register, upuser, deleteuser, getall } = require("../Controllers/usercontrollers");
const { registervlidztion, vaalidator } = require("../Middleware/validator");
const auth = require("../Middleware/auth");

//require router
const router=express.Router()

//get user
router.get("/getusers",getall);


router.post("/register",registervlidztion(),vaalidator,register);

//update user
router.put("/edit/:_id",upuser);

//delete user
router.delete("/delete/:_id",deleteuser);

//current user
router.get("/current/",auth,(req,res)=>{res.send(req.user)});


module.exports = router;
