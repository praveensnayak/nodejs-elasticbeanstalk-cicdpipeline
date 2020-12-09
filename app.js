const express = require("express");
const app = express();

//Sets the public folder as the external file folder
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req,res){
    res.render("homepage");
});

app.get("/gamelist",function(req,res){
    const games = [
        {title: "Cricket", creator: "England"},
        {title: "Hockey", creator: "India"},
        {title: "BasketBall", creator: "US"}
        {title: "BaseBall", creator: "US"}
    ]
      res.render("gamelist", {
        gamesList: games
    });
  });

//const port = process.env.port || 3000;
app.listen("3000", function(){
    console.log("Gaming website has started up! Made by Praveen Nayak...");
});

module.exports = app;
