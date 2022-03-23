const mongoose = require('mongoose');
const Schema = mongoose.Schema

const playerSchema = new Schema({
  firstName: String,
  lastName: String,
  team: String,
  teamId: {type: Schema.Types.ObjectId, ref: 'Team'},
  leagueId: {type: Schema.Types.ObjectId, ref: 'League'},
  apiId: Number, 
  age: Number,
  nationality: String,
  gamesPlayed: Number,
  goals: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model('Player', playerSchema);