import fs from 'fs'
import yargs from 'yargs'
import Creator from './creator'

const commandes = {
  create: (args) => {
    if (typeof args.name !== 'string') {
      console.error('Invalid name: ' + args.name)
      return
    }
    Creator.newComponent(args.name)
  }
}

yargs
.usage('Usage: $0 create -n [string]')
.command('create', 'hello command', {}, commandes.create)
.demandCommand(1)
.demandOption(['n'])
.option('name', {
  alias: 'n',
  default: null
})
.nargs('n', 1)
.help()
.argv
