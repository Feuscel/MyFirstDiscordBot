module.exports = {
	name: 'config',
	description: 'Configurer bot.',
	args: true,
	guildOnly: false,
	execute(message, args) {
		switch (args[0]){
		case 'help':
			message.channel.send(this.description);
			break;
		case 'prefix':
			if (args[1] === undefined) {
				message.channel.send('Il me faut un prefix');
				break;
			}
			// eslint-disable-next-line no-case-declarations
			require('../../configFile.js').prefix = args[1];
			message.channel.send('@everyone le nouveau prefix est "' + require('../../configFile.js').prefix + '"');
			break;
		default :
			throw new Error('database failed to connect');
		}
	},
};

