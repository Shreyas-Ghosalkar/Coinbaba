const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    chain : {
        type: String,
        required: true,
    },
    symbol : {
        type: String,
        required: true,
    },
    marketcap : {
        type: String,
        required: true,
    },
    price : {
        type: String,
        required: true,
    },
    launch : {
        type: String,
        required: true,
    },
    votes : {
        type: Number,
        required: true,
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;