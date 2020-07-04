const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title
  // })
  console.log(duplicateNotes.length)

  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body
    })
    console.log(chalk.green.inverse('New note added!'))
    saveNotes(notes)
  } else {
    console.log(chalk.red.inverse('Note title taken!')) 
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString)
  } catch(e) {
    return []
  }
}

const listNotes = () => {
  const notes = loadNotes()
  chalk.inverse('Your notes')
  notes.forEach(element => {
    console.log(element.title)
  });
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => {
    return note.title !== title
  })

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Notes removed!'))
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const readNotes = (title)  => {
  const notes = loadNotes()
  debugger
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }

}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}