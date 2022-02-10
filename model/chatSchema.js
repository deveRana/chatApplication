const Mongoose = require('mongoose');

const chatSchema = Mongoose.Schema({

    members : {
        type : Array
    }

} , { timeStamps : true } );


const Chats = Mongoose.model('Chats' , chatSchema);

module.exports = Chats;
