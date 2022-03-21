const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
},{
    timestamps: true,
})

module.exports = mongoose.model('Profile', profileSchema)