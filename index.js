const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Gemeente Delft`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '=';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}TEST`){
    message.channel.send("TEST");
    
  if(cmd === "HELP") {
    const sayMessage = args.join("HELP!!");
    message.channel.send(sayMessage);
  }
  }
  }
});

bot.login(process.env.token);
