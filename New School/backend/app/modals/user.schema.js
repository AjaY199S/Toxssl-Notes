const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const user = new userSchema(
    {
        name: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'Female']
        },
        contact: {
            type: Number,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    {
        collection: 'users'
    }
);

module.exports = mongoose.model('userSchema', user);
