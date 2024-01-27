// socket.js
const socketIO = require('socket.io');
const http = require('http');

let io; // Declare io as a global variable

const createSocketServer = (server) => {
    io = socketIO(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected');

        // Simulate real-time updates (replace with actual live updates logic)
        var counter = 0;
        socket.emit('liveScoreUpdate', { message: 'New live score update!', score: counter });

        // Update every 5 seconds

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    console.log(io)
    return io;
};

const getIO = () => {
    console.log('getIO called',io);
    if (!io) {
        throw new Error('Socket.IO not initialized');
    }
    return io;
};

module.exports = { createSocketServer, getIO };
