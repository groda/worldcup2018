//
// This is where the app starts, and sets things up
// We require the packages we need, body parser and express, and then set up body parser to accept
// JSON and URL encoded values. We then include the `routes.js` file, in which we define the API
// end-points we're going to be using, and we pass it the `app` variable. Lastly, we specify the
// port to listen to for requests. In this case, port 3000.
// 
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var fs = require("fs");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

var wiki = "https://upload.wikimedia.org/wikipedia/commons/";
var wikith = wiki +"thumb/";
var data =  {
"team":[
   {"id": "ARG", "name": "Argentina", "cc": "ar", 
   "flag_svg": wiki+"1/1a/Flag_of_Argentina.svg", 
   "flag_png": wikith+"1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png"}, 
   {"id": "AUS", "name": "Australia", "cc": "au",
    "flag_svg": wiki+"8/88/Flag_of_Australia_%28converted%29.svg",
    "flag_png": wikith+"8/88/Flag_of_Australia_%28converted%29.svg/320px-Flag_of_Australia_%28converted%29.svg.png"},
   {"id": "BEL", "name": "Belgium", "cc": "be",
    "flag_svg": wiki+"9/92/Flag_of_Belgium_%28civil%29.svg",
    "flag_png": wikith+"9/92/Flag_of_Belgium_%28civil%29.svg/320px-Flag_of_Belgium_%28civil%29.svg.png"},
   {"id": "BRA", "name": "Brazil", "cc": "br",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png"},
   {"id": "COL", "name": "Colombia", "cc": "co",
    "flag_svg": wiki+"2/21/Flag_of_Colombia.svg",
    "flag_png": wikith+"2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png"},
   {"id": "CRC", "name": "Costa Rica", "cc": "cr",
    "flag_svg": wiki+"f/f2/Flag_of_Costa_Rica.svg",
    "flag_png": wikith+"f/f2/Flag_of_Costa_Rica.svg/320px-Flag_of_Costa_Rica.svg.png"},
   {"id": "CRO", "name": "Croatia", "cc": "hr",
    "flag_svg": wiki+"1/1b/Flag_of_Croatia.svg",
    "flag_png": wikith+"1/1b/Flag_of_Croatia.svg/320px-Flag_of_Croatia.svg.png"},
   {"id": "DEN", "name": "Denmark", "cc": "dk",
    "flag_svg": wiki+"9/9c/Flag_of_Denmark.svg",
    "flag_png": wikith+"9/9c/Flag_of_Denmark.svg/317px-Flag_of_Denmark.svg.png"},
   {"id": "EGY", "name": "Egypt", "cc": "eg",
    "flag_svg": wiki+"f/fe/Flag_of_Egypt.svg",
    "flag_png": wikith+"f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png"},
   {"id": "ENG", "name": "England", "cc": "uk",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png"},
   {"id": "FRA", "name": "France", "cc": "fr",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png"},
   {"id": "GER", "name": "Germany", "cc": "de",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png"},
   {"id": "ISL", "name": "Iceland", "cc": "is",
    "flag_svg": wiki+"c/ce/Flag_of_Iceland.svg",
    "flag_png": wikith+"c/ce/Flag_of_Iceland.svg/320px-Flag_of_Iceland.svg.png"},
   {"id": "IRN", "name": "IR Iran", "cc": "ir",
    "flag_svg": wiki+"c/ca/Flag_of_Iran.svg",
    "flag_png": wikith+"c/ca/Flag_of_Iran.svg/320px-Flag_of_Iran.svg.png"},
   {"id": "JPN", "name": "Japan", "cc": "jp",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png"},
   {"id": "KOR", "name": "Korea Republic", "cc": "kr",
    "flag_svg": wiki+"0/09/Flag_of_South_Korea.svg",
    "flag_png": wikith+"0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png"},
   {"id": "MEX", "name": "Mexico", "cc": "mx",
    "flag_svg": wiki+"f/fc/Flag_of_Mexico.svg",
    "flag_png": wikith+"f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png"},
   {"id": "MAR", "name": "Morocco", "cc": "ma",
    "flag_svg": wiki+"2/2c/Flag_of_Morocco.svg",
    "flag_png": wikith+"2/2c/Flag_of_Morocco.svg/320px-Flag_of_Morocco.svg.png"},
   {"id": "NGA", "name": "Nigeria", "cc": "ng",
    "flag_svg": wiki+"7/79/Flag_of_Nigeria.svg",
    "flag_png": wikith+"7/79/Flag_of_Nigeria.svg/320px-Flag_of_Nigeria.svg.png"},
   {"id": "PAN", "name": "Panama", "cc": "pa",
    "flag_svg": wiki+"a/ab/Flag_of_Panama.svg",
    "flag_png": wikith+"a/ab/Flag_of_Panama.svg/320px-Flag_of_Panama.svg.png"},
   {"id": "PER", "name": "Peru", "cc": "pe",
    "flag_svg": wiki+"c/cf/Flag_of_Peru.svg",
    "flag_png": wikith+"c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png"},
   {"id": "POL", "name": "Poland", "cc": "pl",
    "flag_svg": wiki+"1/12/Flag_of_Poland.svg",
    "flag_png": wikith+"1/12/Flag_of_Poland.svg/320px-Flag_of_Poland.svg.png"},
   {"id": "POR", "name": "Portugal", "cc": "pt",
    "flag_svg": wiki+"5/5c/Flag_of_Portugal.svg",
    "flag_png": wikith+"5/5c/Flag_of_Portugal.svg/320px-Flag_of_Portugal.svg.png"},
   {"id": "RUS", "name": "Russia", "cc": "ru",
    "flag_svg": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    "flag_png": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"},
   {"id": "KSA", "name": "Saudi Arabia", "cc": "sa",
    "flag_svg": wiki+"0/0d/Flag_of_Saudi_Arabia.svg",
    "flag_png": wikith+"0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png"},
   {"id": "SEN", "name": "Senegal", "cc": "sn",
    "flag_svg": wiki+"f/fd/Flag_of_Senegal.svg",
    "flag_png": wikith+"f/fd/Flag_of_Senegal.svg/320px-Flag_of_Senegal.svg.png"},
   {"id": "SRB", "name": "Serbia", "cc": "rs",
    "flag_svg": wiki+"f/ff/Flag_of_Serbia.svg",
    "flag_png": wikith+"f/ff/Flag_of_Serbia.svg/320px-Flag_of_Serbia.svg.png"},
   {"id": "ESP", "name": "Spain", "cc": "es",
    "flag_svg": wiki+"9/9a/Flag_of_Spain.svg",
    "flag_png": wikith+"9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"},
   {"id": "SWE", "name": "Sweden", "cc": "se",
    "flag_svg": wiki+"4/4c/Flag_of_Sweden.svg",
    "flag_png": wikith+"4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png"},
   {"id": "SUI", "name": "Switzerland", "cc": "ch",
    "flag_svg": wiki+"f/f3/Flag_of_Switzerland.svg",
    "flag_png": wikith+"f/f3/Flag_of_Switzerland.svg/240px-Flag_of_Switzerland.svg.png"},
   {"id": "TUN", "name": "Tunisia", "cc": "tn",
    "flag_svg": wiki+"c/ce/Flag_of_Tunisia.svg",
    "flag_png": wiki+"c/ce/Flag_of_Tunisia.svg/320px-Flag_of_Tunisia.svg.png"},
   {"id": "URU", "name": "Uruguay", "cc": "uy",
    "flag_svg": wiki+"f/fe/Flag_of_Uruguay.svg",
    "flag_png": wikith+"f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png"}
	],
};

var content = fs.readFileSync("group_matches.json");
data["group_match"] = JSON.parse(content);

app.get("/country_data", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if(req.query.name) {
    var response = data["team"].filter(el => el.name.toLowerCase() == req.query.name.toLowerCase());
  }
  if(req.query.cc) {
    var response = data["team"].filter(el => el.cc.toLowerCase() == req.query.cc.toLowerCase());
  }
  if(req.query.id) {
    var response = data["team"].filter(el => el.id.toLowerCase() == req.query.id.toLowerCase());
  }
  if (response) {
    return res.send(response[0]);
  }
  else {
      return res.send({"status": "error", "message": "no data"});
  }
});  
 

app.get("/all_teams", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if(req.query.type) {
    var k = req.query.type.toLowerCase();
    var response = data["team"].map(el => el[k]); 
    if (response) {
      return res.send(response);
    }
  }
  else {
    return res.send(JSON.stringify(data["team"],null, '\t')); 
  }
});  
 

app.get("/all_group_matches", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if(req.query.type) {
    var k = req.query.type.toLowerCase();
    var response = data["group_match"].map(el => el[k]); 
    return res.send(JSON.stringify(response,null, '\t')); 
  }
  else {
    return res.send(JSON.stringify(data["group_match"],null, '\t')); 
  }
});  
 

module.exports = routes;
