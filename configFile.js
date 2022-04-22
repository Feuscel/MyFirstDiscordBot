module.exports = {
	fs: require('fs'),
	dotenv: require('dotenv'),
	srcFile : './src/commands',
	prefix: '!',
	// defaultPrefix: "!",
	configCommand(commands) {
		const commandFolders = this.fs.readdirSync(this.srcFile);
		for (const folder of commandFolders) {
			const commandFiles = this.fs.readdirSync(`${this.srcFile}/${folder}`).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {
				const commandName = require(`${this.srcFile}/${folder}/${file}`);
				commands.set(commandName.name, commandName);
			}
		}
	},
};