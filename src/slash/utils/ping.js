module.exports = {
    name: "ping", description: "Veja o ping",
    run: async (interaction) => {
        await interaction.reply({
            content: `Ping: ${interaction.client.ws.ping}ms`
        })
    }
}