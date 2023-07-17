import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    favourites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'book' 
    }]
}, {timestamps: true});



const User = mongoose.model('User', userSchema);

export default User;