const mongoose = require('../mongoose');

const schemaUser = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    userage: {
        type: Number,
        required: true,
        min: 0,
        max: 70
    }
}, { versionKey: false })

const User = mongoose.model("User", schemaUser);

module.exports = User;