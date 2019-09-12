const ns = require('node-ns-api');
const config = require('./config.json')
const api = new ns.API(config.nskey);
var parameters = {
    dateTime: null,
    maxJourneys: null,
    lang: null,
    station: "ZL",
    uicCode: null,
    source: null
};
api.getDepartures(parameters).then(board => {
    let utrecht = board.departures.map(departure => {
        if(departure.direction == "Utrecht Centraal")
            return departure
    })
    var filtered = utrecht.filter(function (el) {
        return el != undefined;
      });
    console.log(filtered)
})