const { OWNER_ID } = require('../config/env');
const messageHandler = (bot) => {
    bot.on('message', (msg) => {
        if (msg.text &&  !msg.text.startsWith('/')) {
            bot.sendMessage(OWNER_ID, `Anonymous message:\n\n${msg.text}`);           
        }
    });
};

module.exports = messageHandler;