import gcd from './gcd'
import primefactor from './primefactor/index'
import { matchCommand } from '../index'


const commands = {
  gcd,
  primefactor
}
export default async (msg, commandArgs) => {
  const response = await matchCommand(msg, commandArgs, commands, 'math')
  if (response) {
    msg.channel.send(response)
  }
}
