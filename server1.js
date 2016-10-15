var restify = require('restify');
var builder = require('botbuilder');

var port = process.env.PORT || 8080;

var app_params = {
  appId: '69adfd60-052f-46c5-8222-ef9bd7ef6530',
  appSecret: 'EoW9Kq8XRYHofAixpx32VYU'
};
var bot = new builder.BotConnectorBot(app_params);
bot.add('/', function(session) {
  session.send('Hello World');
});

var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(port, function() {
  console.log('%s listening to %s', server.name, server.url);
});
