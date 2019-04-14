const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    client.on("EmergencyEvent", () => {
        io.sockets.emit("EmergencyReceivedEvent");
    })
});
server.listen(60000);