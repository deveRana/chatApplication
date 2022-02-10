const Mongoose = require('mongoose');

const userSchema = Mongoose.Schema({

    googleId : {
        type : String,
        reuire : true
    },

    imageUrl : {
        type : String,
        reuire : true
    },

    email : {
        type : String,
        reuire : true
    },

    name : {
        type : String,
        reuire : true
    }

})

const User = Mongoose.model('User' , userSchema)

module.exports = User;
