module.exports = {
    name: "messageCreate",
    run: async (message) => {
        if (message.author.bot) return;
        const prefix = "!"
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const cmd = message.client.prefixCommands.get(commandName)

        try {
            cmd.run(message)
            return
        } catch (err) {
            console.error(`Erro: ${err}`)
        }
    }
}