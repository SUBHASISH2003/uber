const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

//creating a user schema
const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[3,'First name must be at least 3 character'],
        },
        lastname: {
            type: String,
            required: true,
            minlength:[3,'Last name must be at least 3 character'],
        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
        minlength: [4,'Email must be at least 4 character'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String,
    },


})

//to generate token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '24h' } // Expiration time
      );
    return token;
}

//to compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
}

//to hash password
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
    
}

//creating user model
const userModel = mongoose.model('user', userSchema);

module.exports = userModel; //export usermodel