const  mongoose  = require("mongoose");

var userschema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    articles: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false }
})

var usermodel = mongoose.model('course',userschema);
module.exports = usermodel;