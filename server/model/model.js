const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: false,
    },
    chain : {
        type: String,
        required: false,
    },
    symbol : {
        type: String,
        required: false,
    },
    marketcap : {
        type: String,
        required: false,
    },
    price : {
        type: String,
        required: false,
    },
    launch : {
        type: String,
        required: false,
    },
    
    telegram_link : {
        type: String,
        required: false,
    },
    coin_website : {
        type: String,
        required: false,
    },
    votes : {
        type: Number,
        required: false,
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;