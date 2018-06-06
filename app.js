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

var data = {};

var content = fs.readFileSync("teams.json");
data["team"] = JSON.parse(content);
content = fs.readFileSync("group_matches.json");
data["group_match"] = JSON.parse(content);
content = fs.readFileSync("country_names.json");
var translate = JSON.parse(content);

app.get("/country_data", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if (req.query.lang && req.query.lang=="de") {
  	data["team"].forEach(el => el.name = translate["de"][el.cc]);
  }
  else {
    data["team"].forEach(el => el.name = translate["en"][el.cc]);
  }
  if(req.query.name) {
    return res.send(data["team"].find(el => el.name.toLowerCase() == req.query.name.toLowerCase()));
  }
  if(req.query.cc) {
    return res.send(data["team"].find(el => el.cc.toLowerCase() == req.query.cc.toLowerCase()));
  }
  if(req.query.id) {
    return res.send(data["team"].find(el => el.id.toLowerCase() == req.query.id.toLowerCase()));
  } 
  return res.send({"status": "error", "message": "incorrect/no parameters in query"});
});  
 
 

app.get("/all_teams", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if (req.query.lang && req.query.lang=="de") {
  	data["team"].forEach(el => el.name = translate["de"][el.cc]);
  }
  else {
    data["team"].forEach(el => el.name = translate["en"][el.cc]);
  }
  if(req.query.type) {
    var k = req.query.type.toLowerCase();
    return res.send(data["team"].map(el => el[k]));
  }
  else {
    return res.send(JSON.stringify(data["team"],null, '\t')); 
  }
});  
 

app.get("/all_group_matches", function(req, res) {
  console.log("Received GET: "+JSON.stringify(req.body));
  if (req.query.lang && req.query.lang=="de") {
  	data["group_match"].forEach(el => {el.Team1 = translate["de"][el.cc1];
  		                               el.Team2 = translate["de"][el.cc2];
  		                              });
  }
  else {
 	data["group_match"].forEach(el => {el.Team1 = translate["en"][el.cc1];
  		                               el.Team2 = translate["en"][el.cc2];
  		                              });
  }
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
