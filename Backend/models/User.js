import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: 'jobseeker'
    },
    city:
    {
        type: String,
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);