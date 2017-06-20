// Importing Node packages required for schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const ROLE_DIRECTEUR = require('../constants').ROLE_DIRECTEUR;
const ROLE_ELEVE = require('../constants').ROLE_ELEVE;
const ROLE_MEMBER = require('../constants').ROLE_MEMBER;


const Schema = mongoose.Schema;

//= ===============================
// User Schema
//= ===============================
const UserSchema = new Schema({
  lastName: { type: String, required : true  },
  firstName: { type: String, required : true },
  doB: { type: String },
  email: {
    type: String,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  codEtab: { type: String },
  role: {
    type: String,
    enum: [ROLE_DIRECTEUR, ROLE_ELEVE, ROLE_MEMBER],
    default: ROLE_MEMBER,
    required: true
  },
  skills: {
  }
  timestamps: true
});

//= ===============================
// User ORM Methods
//= ===============================

// Pre-save of user to database, hash password if password is modified or new.
// We run this function pre before adding the user to the database.
UserSchema.pre('save', function (next) {
  const user = this,
    SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};

// We know create the collection 'User' based on the schema 'UserSchema' then we export it
module.exports = mongoose.model('User', UserSchema);
