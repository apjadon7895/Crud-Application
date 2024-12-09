const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

// No need for auto-increment here if you're fine with Mongoose default `_id`
const User = mongoose.model('user', userSchema);
module.exports = User;
