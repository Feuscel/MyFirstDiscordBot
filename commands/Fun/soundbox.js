module.exports = {
    name: 'sb',
    description: 'Ping!',
    args: true,
    guildOnly: true,
    isJoined: false,
    async execute(message, args) {
        const { voice } = message.member;
        switch (args[0]){
            case 'join':
                await voice.channel.join().then((connection) => {
                    connection.play('/home/feuscel/Documents/lab/bot/MyFirstDiscordBot/commands/Fun/audio.mp3');
                });
                break;
            case 'play':
                const dispatcher = voice.channel.play('/home/feuscel/Documents/lab/bot/MyFirstDiscordBot/commands/Fun/audio.mp3');

        }

    },
};