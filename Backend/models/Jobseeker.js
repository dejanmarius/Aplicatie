import mongoose from 'mongoose';

const jobseekerSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cv:{
        type: String,
        default:""
    },
    dob: {
        type: Date,
        default: ''
      },
      skills: {
        type: Array
      },
      about: {
        type: String,
        minlength: 100
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Jobseeker', jobseekerSchema);
    