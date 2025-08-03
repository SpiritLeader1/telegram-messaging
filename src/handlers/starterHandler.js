const startHandler = (bot) =>{
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, "Welcome to the message bot! Send me a message and I will send it to master anonymously.");
    });
};

module.exports = startHandler;