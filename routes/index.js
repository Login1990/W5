var express = require('express');
const mongoose = require("mongoose");
const Recipes = require("../models/recipes.js")
var router = express.Router();

let recipes = {}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe/:food", (req,res,next) => {
  Recipes.find({name: req.params.food}, (err, recipe) => {
    if(err) return next(err);
    if(recipe) {
      return res.send(recipe)
    } else {
      return res.status(404).send("Recipe not found")
    }
  })
})

router.post("/recipe/", (req,res,next) => {
  Recipes.findOne({name: req.body.name}, (err, name) => {
    if(err) return next(err);
    try{
      if(!name){
        new Recipes({
          name: req.body.name,
          ingredients: req.body.ingredients,
          instructions: req.body.instructions
        }).save()
      }
    } catch(err){
      console.log(err)
      //next(err);
    }
  })
  res.send(req.body)
});

router.post("/images", (req,res,next) =>{
  res.send("Hi")
})

module.exports = router;
