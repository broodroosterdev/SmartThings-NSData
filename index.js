const ns = require('node-ns-api');
const http = require('http');
const moment = require('moment')
const config = require('./config.json')
const api = new ns.API(config.nskey);
http.createServer(function(req, res){
    console.log(req.headers)
    var parameters = {
        dateTime: req.headers.tijd,
        maxJourneys: null,
        lang: null,
        station: req.headers.station,
        uicCode: null,
        source: null
    };
    api.getDepartures(parameters).then(board => {
        let utrecht = board.departures.map(departure => {
            if(departure.direction == req.headers.richting)
                return departure
        })

        var filtered = utrecht.filter(function (el) {
            return el != undefined;
          });
        res.write(JSON.stringify(filtered))
        res.end();
        //console.log(filtered)
    })
}).listen(4000, '127.0.0.1', function(){


})
