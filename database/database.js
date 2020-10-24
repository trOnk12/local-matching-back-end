const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:Acostam12@@cluster0.4uqs2.mongodb.net/location_matching?retryWrites=true&w=majority";

function connect(){
    mongoose.connect(uri,{useNewUrlParser:true}).then(
        () => { console.log("Mongoose successfully connected") },
        err => {console.log(err)}
    )
};

module.exports = { connect };


