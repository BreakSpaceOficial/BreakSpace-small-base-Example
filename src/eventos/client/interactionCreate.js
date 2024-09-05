module.exports = {
    name: "interactionCreate",
    run: async (interaction) => {
        const cmd = interaction.client.slashCommands.get(interaction.commandName)
        if (interaction.isCommand()) {
            try {
                cmd.run(interaction)
                return
            } catch (err) {
                console.error(`Erro: ${err}`)
            }
        }
    }
}