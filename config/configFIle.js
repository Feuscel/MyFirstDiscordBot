module.exports = {
    fs: require('fs'),
    dotenv: require('dotenv'),
    path: require('path'),
    pathCommand: this.path.resolve('../commands/'),
    prefix: "!",
    //defaultPrefix: "!";
    configCommand(commands){
        const commandFolders = this.fs.readdirSync(this.pathCommand);
        for (const folder of commandFolders) {
            const commandFiles = this.fs.readdirSync(`${this.pathCommand}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const commandName = require(`${this.pathCommand}/${folder}/${file}`);
                commands.set(commandName.name, commandName);
            }
        }
    }
}