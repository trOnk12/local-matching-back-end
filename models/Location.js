var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  userId: String,
  location:{
    latitude : String,
    longitude : String
  }
});

mongoose.model("Location",LocationSchema);