require("dotenv").config()
const { Client } = require("@breakspace/small-base")
const { GatewayIntentBits } = require("discord.js")
const client = new Client({
    intents: [
        "MessageContent",
        "GuildMessages",
        "Guilds"
    ]
})
client.eventos("src/eventos")
client.slash("src/slash")
client.prefix("src/prefix")
client.conectar(process.env.TOKEN)