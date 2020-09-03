const fs = require("fs")
const chalk = require('chalk')

// Gets Notes
const getNotes = function () {
    return 'Your Notes...'
}

// Loads and parses Notes from file, [] if no file exists.
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Add changes to loaded notes.
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title == title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// Saves notes to file.
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your Notes'));
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)
    if (note) {
        console.log(chalk.bold(note.title))
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}