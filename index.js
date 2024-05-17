import PS from 'psim.us';

const bot = new PS.Client({
    name: 'username', pass: 'password', rooms: ['botdevelopment'], reconnectMs: 10000
});

bot.connect('sim.smogon.com', 8000);

setTimeout(() => {
    if(bot.connection.connected) {
        bot.send("|/offlinepms");
        console.log("sent /offlinepms");
    }
}, 5000);

// force shutdown after 20 seconds 
setTimeout(() => {
    process.exit();
}, 20000);