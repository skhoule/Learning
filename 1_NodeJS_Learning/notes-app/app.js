const yargs = require('yargs')

const notes = require('./notes.js')


//Cusotmized yargs version
yargs.version('1.1.0')


//Add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//List
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler() {
        notes.listNotes();
    }
})

//Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            string: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title) ;
    }
})






































// const command = process.argv[ 2 ]

// if (command === 'add') {
//     console.log('Adding Note!');

// } else if (command === 'remove') {
//     console.log('Removing note...');
// }




// const msg = getNotes()

// console.log(msg);

// console.log(validator.isURL('mail. com'));
// console.log(chalk.green.inverse('Success!'));

//console.log(process.argv)
//console.log(yargs.argv);
yargs.parse()