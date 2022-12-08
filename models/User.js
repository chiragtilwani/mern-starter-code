const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required'],
        min: [3,'Username must contain atleast 3 characters'],
        max: [50,'Username must contain atmost 50 characters'],
        unique: [true,'Username already exists']
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true,'Email already exists']
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    profilePicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{timestamps:true}
)

module.exports = mongoose.model('User', userSchema)