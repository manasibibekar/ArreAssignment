const mongoose = require('mongoose');

// id created by default
const userSchema = new mongoose.Schema(
   {
        name: String,
        number: {type: String, unique: true}, // string because of country codes
        groupMemberships: [{type: mongoose.Types.ObjectId, ref: 'Groups'}]
   },
   { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);