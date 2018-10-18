"use strict";

var Alexa = require("ask-sdk")

var handlers = {
    "LaunchRequest": function() {

    },
    
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event,context);

    alexa.registerHandlers(handlers);

    alexa.execute();

};