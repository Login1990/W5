const mongoose = require("mongoose")
const a = 1
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    instructions: [{
        type: String
    }],
    ingredients: [{
        type: String
    }],
    name: String,
})

module.exports = mongoose.model("Recipes", recipeSchema)