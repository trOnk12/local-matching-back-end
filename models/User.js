var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: String,
   name : String
});

mongoose.model("User",UserSchema);