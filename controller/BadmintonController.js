// badmintonController.js
const { getIO } = require('../socket'); // Adjust the path accordingly

const io = getIO();

io.on('updateScore', (data) => {
    console.log('Received updateScore event:', data);
    // Handle the updateScore event logic here
});

// Add more logic related to badminton here
