const mongoose = require("mongoose");
const router = require('express').Router()

const User = mongoose.model("User");

// create new user with id here
router.post("/user",(req,res,next) =>{
    new User({
        _id : req.body.id,
        name : req.body.name
    }).save().then((user) => {
        res.send(200,user);
    }).catch((error) => {
        console.log(error);
        res.send(400,error);
    });
});

// put location into the user object
router.post("/user/:id/location",(req,res,next) =>{
    User.findById(req.params.id).then((user) => {
        
    },(error) => {

    });
});

module.exports = router;