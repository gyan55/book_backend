import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

userSchema.pre('save', function (next) {  //encrypting the password using bcrypt
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password) {   //comparing password during login
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret', { //creating the token
        expiresIn: '1h'
    });
}




const User = mongoose.model('User', userSchema);

export default User;