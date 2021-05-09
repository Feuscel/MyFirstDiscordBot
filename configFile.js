module.exports = {
    fs: require('fs'),
    dotenv: require('dotenv'),
    prefix: "!",
    //defaultPrefix: "!",
    configCommand(commands){
        const commandFolders = this.fs.readdirSync("./commands");
        for (const folder of commandFolders) {
            const commandFiles = this.fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const commandName = require(`./commands/${folder}/${file}`);
                commands.set(commandName.name, commandName);
            }
        }
    }
}