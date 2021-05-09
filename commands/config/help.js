module.exports = {
    name: 'config',
    description: 'Configurer bot.',
    args: true,
    guildOnly: true,
    execute(message, args) {
        switch (args[0]){
            case 'help':
                message.channel.send(this.description);
                break;
            case 'prefix':
                const config = require('../../configFile.js');
                config.prefix = args[1];
                console.log(config.prefix);
        }
    }
};

