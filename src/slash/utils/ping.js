module.exports = {
    name: "ping", description: "Veja o ping",
    run: async (interaction) => {
        await interaction.reply({
            content: `${interaction.client.ws.ping}ms`
        })
    }
}