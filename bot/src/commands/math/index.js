import gcd from './gcd'
import primefactor from './primefactor'
import binomial from './binomial'
import phi from './phi'
import quadraticresidue from './quadraticresidue'
import sqrt from './sqrt'

import { matchSubcommand } from '../index'


const commands = {
  gcd,
  primefactor,
  binomial,
  phi,
  quadraticresidue,
  sqrt
}
export default async (msg, commandArgs) => {
  const response = await matchSubcommand(msg, commandArgs, commands, 'math')
  if (response) {
    msg.channel.send(response)
  }
}
