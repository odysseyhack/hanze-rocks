const
    app = require("express")(),
    server = require("http").Server(app),
    io = require("socket.io")(server);

    server.listen(80);

app.get('/emergencyClient.html', function(req, res){
	res.sendFile(__dirname + "/emergencyClient.html");
});

app.get('/transportClient.html', function(req, res){
	res.sendFile(__dirname + '/transportClient.html');
});

// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info("Server is running:  port 80");

    socket.on("disconnect", () => {
    });

    server.on("emergencyEvent", () =>  {
    	console.info("emergency received");
        io.emit("EmergencyReceivedEvent", "Emergency");
    });
});



