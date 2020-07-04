const validator = require('validator');
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})
// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Title to remove',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List the note',
  handler: function() {
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'Read your note',
  builder: {
    title: {
      describe: 'Title to remove',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.readNotes(argv.title)
  }
})


console.log(yargs.parse())