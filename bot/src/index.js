import Discord from 'discord.js'
import handler from './commands'

async function runBot() {
  const client = new Discord.Client()
  client.once('ready', () => {
    console.log('Client setup completed')
  })
  client.on('message', async msg => {
    if (msg.content.charAt(0) !== '$') {
      return
    }
    const response = await handler(msg)
    if (response) {
      msg.channel.send(response)
    }
  })
  await client.login(process.env.CLIENT_SECRET)
}




runBot().then(() => {
  console.log('Bot is Running')
})
