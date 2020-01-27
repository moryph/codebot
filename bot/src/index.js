import Discord from 'discord.js'
import handler from './commands'

async function runBot() {
  const client = new Discord.Client()
  client.once('ready', () => {
    console.log('Ready!')
  })
  client.on('message', async msg => {
    const response = await handler(msg)
    if (response) {
      msg.channel.send(response)
    }
  })
  await client.login(process.env.CLIENT_SECRET)

}




runBot()
