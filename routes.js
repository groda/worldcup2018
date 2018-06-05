var appRouter = function (app) {
  app.get("/", function(req, res) {
    var reqUrl = req.headers.host + req.url; 
	var req1 = "<a href='country_data?cc=uy'>"+reqUrl+"country_data?cc=uy</a>";
	var req2 = "<a href='country_data?id=aus'>"+reqUrl+"country_data?id=aus</a>";
	var req3 = "<a href='country_data?name=belgium'>"+reqUrl+"country_data?name=belgium</a>";
	var req4 = "<a href='all_teams?type=cc'>"+reqUrl+"all_teams?type=cc</a>";
	var req5 = "<a href='all_teams?type=name'>"+reqUrl+"all_teams?type=name</a>";
	var req6 = "<a href='all_teams'>"+reqUrl+"all_teams</a>";
	var req7 = "<a href='all_group_matches'>"+reqUrl+"all_group_matches</a>";
    res.status(200).send("Get data for the FIFA World Cup 2018 countries in JSON format.<p>Query by country code (cc), by id, or by name. Example of usage: "+req1 +" or "+req2+ " or "+req3+".<p>Returns:<ul><li>country name<li>country code<li>link to SVG flag image on Wikipedia<li>link to PNG flag icon on Wikipedia</ul>All teams: "+req6+"<p>"+req4+" returns all data (country codes), "+req5+" all country names.<p>All group matches: "+req7+".");
  });
}

module.exports = appRouter;
