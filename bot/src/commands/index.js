import { parseTypes } from './parser'
import commands from './commands'

async function handler(msg) {
  const messageContents = msg.content
  const matchCommand = /%([A-Za-z]+)\s?(.+)?/.exec(messageContents)
  if (!matchCommand) {
    return
  }
  const commandName = matchCommand[1]
  const commandArgs = matchCommand[2] || ''
  const commandHandler = commands[commandName]
  if (!commandHandler) {
    return `Command \`${commandName}\` not found`
  }
  await commandHandler(msg, commandArgs)
}

export async function matchSubcommand(msg, commandStr, subcommands, topLevelCommand) {

  const matchSubCommand = /([A-Za-z]+)\s?(.+)?/.exec(commandStr)
  if (!matchSubCommand) {
    return `Sub-command required for command \`${topLevelCommand}\``
  }
  const subCommandName = matchSubCommand[1]
  const commandArguments = matchSubCommand[2] || ''
  const subCommand = subcommands[subCommandName]
  if (!handler) {
    return `Sub Command '${topLevelCommand} ${subCommand}' not found`
  } else {
    const matched = subCommand.match.exec(commandArguments)
    if (!matched) {
      return `Usage for command \`${subCommand.name}\`: ${subCommand.usage}`
    }
    try {
      return await subCommand.handler(...await parseTypes(matched.slice(1), subCommand.paramTypes), msg)
    } catch (e) {
      return `\`${e.name}\` encountered: "${e.message}"`
    }

  }

}

export default handler
