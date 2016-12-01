var express = require("express")
var bodyParser = require("body-parser")
var app = express();
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }));

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var randomize = function(array) {
  return array[Math.floor(Math.random() * array.length)]
}

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", (req, res) => {
  compliment = randomize(compliments),
  color = randomize(colors)
  res.render("index", {
    compliment,
    color
  })
})

app.get("/:name", (req, res) => {
  compliment = randomize(compliments),
  color = randomize(colors),
  name = req.params.name
  res.render("index", {
    compliment,
    color,
    name
  })
})

app.post("/", (req, res) => {
  compliments.push(req.body.newCompliment),
  res.redirect("/")
})

app.listen(3001, () => {
  console.log("app is listening on port 3001");
})
