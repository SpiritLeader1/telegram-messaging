const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('./config/env');
const startHandler = require('./handlers/starterHandler');
const messageHandler = require('./handlers/messageHandler');

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

startHandler(bot);
messageHandler(bot);

module.exports = { bot };
