const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const CharacterName = require('../characters/Character');
const Vehicle = new mongoose.Schema({
  vehicle_class: String,
  pilot_keys: [Number],
  key: { type: Number, unique: true },
  pilot: [{type: ObjectId, ref:'Character'}],
  pilots: [{type: ObjectId, ref:'Character'}],
  // pilot_name: {
  //   CharacterName: {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // }
  // add pilots field to link it to the Character model
});

module.exports = mongoose.model('Vehicle', Vehicle);
