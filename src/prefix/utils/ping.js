module.exports = {
    name: "ping", description: "Veja o ping",
    run: async (message) => {
        message.reply({
            content: `${message.client.ws.ping}ms`
        })
    }
}