const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String
    }
})

const contact = mongoose.model("Contact", contactSchema);

module.exports = contact;
