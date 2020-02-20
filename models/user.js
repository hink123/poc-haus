const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 7;

const userSchema = new Schema({
    fullname: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
        if (err) return next();
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);