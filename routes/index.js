var express = require('express');
const mongoose = require("mongoose");
const Recipes = require("../models/recipes.js");
const Categories = require("../models/categories.js");
var router = express.Router();

let recipes = {}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe/:food", (req,res,next) => {
  Recipes.find({name: req.params.food}, (err, recipe) => {
    if(err) return next(err);
    if(recipe[0]) {
      return res.send(recipe[0])
    } else {
      return res.status(404).send({})
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

router.get("/categories", (req, res, next) => {
  Categories.find({}, (err, categories) => {
    if(err) return next(err);
    if(Object.keys(categories).length > 0){
      res.send(categories)
    } else {
      res.status(404).send({})
    }
  })
})

router.post("/categories", (req,res,next) => {
  Categories.findOne({name: req.body.name}, (err, name) => {
    if(err) return next(err);
    console.log(req.body.name)
    console.log(name)
    try{
      if(!name){
        new Categories({
          name: req.body.name
        }).save()
      }
    } catch(err){
      console.log(err)
      //next(err);
    }
  })
  res.send(req.body)
});

module.exports = router;
