module.exports = {
    name: "ping", description: "Veja o ping",
    run: async (message) => {
        message.reply({
            content: `Ping: ${message.client.ws.ping}ms`
        })
    }
}