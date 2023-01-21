const mongoose = require('mongoose');

// id created by default
const groupMessageSchema = new mongoose.Schema(
   {
      groupId: String,
      message: String,
      from: { type: mongoose.Types.ObjectId, ref: 'Users' },
   },
   { timestamps: true } // this will keep the created and updated time stamps for the message
);

module.exports = mongoose.model('GroupMessages', groupMessageSchema);