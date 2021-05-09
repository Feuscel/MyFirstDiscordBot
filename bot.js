const { token } = require('./config.json');
const configuration = require('./configFile.js');

const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();
configuration.dotenv.config();

client.once('ready', () => {
    client.commands = new Discord.Collection();
    configuration.configCommand(client.commands);
    console.log('Ready!');
});

client.login(token).then(r => console.log('I\'m connected'));

client.on('message', message =>{
    if(isPrefix(message)) executeCommand(message);
})

function executeCommand(message){
    const args = getArgs(message);
    const command = getCommand(args, message);
    if (!(command === message)){
        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error trying to execute that command!');
        }
    }


}

function isPrefix(message){
    return !(!message.content.startsWith(configuration.prefix) || message.author.bot);
}

function isCommand(commandName){
    return client.commands.has(commandName);
}

function haveArg(command, args){
    return command.args && !args.length;
}

function getArgs(message){
    return message.content.slice(configuration.prefix.length).trim().split(/ +/);
}

function getCommand(args, message){
    const commandName = args.shift().toLowerCase();
    if (!isCommand(commandName)) return message.lineReplyNoMention("Ceci n'est pas une commande.");
    const command = client.commands.get(commandName);
    if (haveArg(command, args)) return message.lineReplyNoMention("Il faut donné des arguments.");
    return command;

}