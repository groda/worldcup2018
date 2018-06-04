var appRouter = function (app) {
  app.get("/", function(req, res) {
    var reqUrl = req.headers.host + req.url;
        var req1 = "<a href='country_data?cc=uy'>"+reqUrl+"country_data?cc=uy</a>"
        var req2 = "<a href='country_data?id=aus'>"+reqUrl+"country_data?id=aus</a>"
        var req3 = "<a href='country_data?name=belgium'>"+reqUrl+"country_data?name=belgium</a>"
    res.status(200).send("Get data for the FIFA World Cup 2018 countries in JSON format.<p>Query by country code (cc), by id, or by name. For example: "+req1 +" or "+req2+ " or "+req3+".<p>Returns:<ul><li>country name<li>country code<li>link to SVG flag image on Wikipedia<li>link to PNG flag icon on Wikipedia</ul>");
  });
}

module.exports = appRouter;