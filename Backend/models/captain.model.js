const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

//creating a cptain schema
const captainSchema = new mongoose.Schema({
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
        type: String,
        required: true,
        unique: true,
        lowercase: true,
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

    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive',
    },

    vehicle: {
        color: {
            type:String,
            required: true,
            minlength: [3,'Color must be at least 3 character'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3,'Plate must be at least 3 character'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },

    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }


})


//to generate token
captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '24h' } // Expiration time
      );
    return token;
}

//to compare password
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
}

//to hash password
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);

}

//creating captain model
const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel; //export captainmodel