var express = require('express');
var router = express.Router();

let recipes = {}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe/:food", (req,res,next) => {
  let feedback = {
    name: req.params.food,
    instructions: ["boil water","beans","graveyard"],
    ingredients: ["beans","marmite","blakc troufel oil"]
  }
  return res.json(feedback)
})

router.post("/recipe/", (req,res,next) => {
  recipes[req.body.name] = req.body
  return res.json(req.body)
})

router.post("/images", (req,res,next) =>{
  res.send("Hi")
})

module.exports = router;
