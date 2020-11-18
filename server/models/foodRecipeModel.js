const mongoose = require("mongoose")

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  recipeId: { type: String },
  recipeName: { type: String },
  recipeType: { type: String },
  recipeDescription: { type: String },
  recipeIngredients: { type: Array },
  recipeDirections: { type: Array },
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
})

module.exports = mongoose.model('Recipe', recipeSchema)
