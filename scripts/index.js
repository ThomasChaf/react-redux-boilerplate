import fs from 'fs'
import yargs from 'yargs'
import Creator from './creator'

const commandes = {
  component: (args) => {
    if (typeof args.name !== 'string') {
      console.error('Invalid name: ' + args.name)
      return
    }
    Creator.newComponent(args.name)
  },
  module: (args) => {
    if (typeof args.name !== 'string') {
      console.error('Invalid name: ' + args.name)
      return
    }
    Creator.newReducer(args.name)
    Creator.newAction(args.name)
  }
}

yargs
.usage('Usage: $0 create -n [string]')
.command('component', 'Create a component', {}, commandes.component)
.command('module', 'Create a module into common', {}, commandes.module)
.demandCommand(1)
.demandOption(['n'])
.option('name', {
  alias: 'n',
  default: null
})
.nargs('n', 1)
.help()
.argv
