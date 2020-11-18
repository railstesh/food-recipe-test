const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String },
  userName: { type: String },
  password: { type: String },
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
})

module.exports = mongoose.model('User', userSchema)
