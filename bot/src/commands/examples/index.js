import greet from './greet'
import add from './add'

import { matchSubcommand } from '../index'


const commands = {
  greet,
  add
}
export default async (msg, commandArgs) => {
  const response = await matchSubcommand(msg, commandArgs, commands, 'examples')
  if (response) {
    msg.channel.send(response)
  }
}
