const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const axios = require("axios");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust with your React app's URL
    methods: ["GET", "POST"],
  },
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("A user connected");

  // Simulate real-time updates (replace with actual live updates logic)

  //socket.emit('liveScoreUpdate', { message: 'New live score update!' });
  // Update every 5 seconds
  socket.on("updateScore", (data) => {
    console.log("Received updateScore event:", data);
    io.emit("updateScore", data);
  });

  socket.on("noti", (data) => {
    socket.broadcast.emit("noti", data);
  })
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
