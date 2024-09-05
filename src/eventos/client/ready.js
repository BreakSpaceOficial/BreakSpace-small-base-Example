module.exports = {
    name: "ready",
    run: async (client) => {
        console.log(`Online como ${client.user.username}`)
        client.registrar({ type: "global" })
    }
}