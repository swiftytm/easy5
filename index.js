const Discord = require("Discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.login(process.env.token);