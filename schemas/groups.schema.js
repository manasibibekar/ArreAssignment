const mongoose = require('mongoose');

// id created by default
const groups = new mongoose.Schema(
   {
        name: String,
        members: [{type: mongoose.Types.ObjectId, ref: 'Users'}],
        admins: [{type: mongoose.Types.ObjectId, ref: 'Users'}],
        description: String,
        icon: String,
        messages: [{type: mongoose.Types.ObjectId, ref: 'GroupMessages'}]
   },
   { timestamps: true } // this will keep the created and updated time stams for the message
);

module.exports = mongoose.model('Groups', groups);