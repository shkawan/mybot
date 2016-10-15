var restify = require('restify');
var builder = require('botbuilder');

var port = process.env.PORT || 8000;
var server = restify.createServer();
server.listen(port, function() {
  console.log('%s listening to %s', server.name, server.url);
});

var app_params = {
  appId: '69adfd60-052f-46c5-8222-ef9bd7ef6530',
  appSecret: 'R9GgXCLFahdPGFmUed1Ytci'
};
var conn = new builder.ConsoleConnector(app_params);
// var conn = new builder.ChatConnector(app_params);
var bot = new builder.UniversalBot(conn);
server.post('/api/messages', conn.listen());

bot.dialog('/', function(session) {
  session.send('Hello World');
});
bot.dialog('/profile', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.userData.name = results.response;
        session.endDialog();
    }
]);
