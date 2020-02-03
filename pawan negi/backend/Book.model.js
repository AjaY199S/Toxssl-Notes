const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        lowercase: true
    }
});

module.exports = mongoose.model('Book', BookSchema);