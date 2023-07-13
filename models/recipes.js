const mongoose = require("mongoose")

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

module.exports = mongoose.model("recipes", recipeSchema)