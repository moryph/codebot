import { parseTypes } from './parser'

async function handler(msg) {
  const messageContents = msg.content
  const commandName = messageContents.substring(0, messageContents.indexOf(' '))
  const commandArgs = messageContents.substring(messageContents.indexOf(' '))
  const commandHandler = require('./' + commandName)

  if (!commandHandler) {
    return `Command '${commandName}' not found`
  }
  await commandHandler(msg, commandArgs)
}

export async function matchCommand(msg, commandStr, commands, topLevelCommand) {
  const subCommandName = commandStr.substring(0, commandStr.indexOf(' '))
  const commandArguments = commandStr.substring(commandStr.indexOf(' '))
  const subCommand = commands[subCommandName]
  if (!handler) {
    return `Sub Command '${topLevelCommand} ${subCommand}' not found`
  } else {
    const matched = subCommand.match.exec(commandArguments)
    if (!matched) {
      return subCommand.usage
    }
    try {
      return await subCommand.handler(...await parseTypes(matched, subCommand.paramTypes), msg)
    } catch (e) {
      return `${e.name} encountered: "${e.message}"`
    }

  }

}

export default handler
