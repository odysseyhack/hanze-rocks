const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:6000");

ioClient.on("EmergencyReceivedEvent", (msg) => console.info(msg));