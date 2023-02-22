
const notes = require('./notes.js')
const validator = require('validator')
const chalk =  require('chalk')
const yargs = require('yargs')

/*
class-1..
const fs = require('fs')
//fs.writeFileSync('notes.txt','hi!this is just sample text...')
try{
fs.appendFileSync('notes.txt','hi!again i append some sample text in this file')
console.log('append some text into notes file')
}catch(err)
{
    console.log(err)
}*//*
const msg = getNotes()
console.log(msg)
console.log(validator.isEmail('abc@gmail.com'))
console.log(validator.isURL('https://www.abc.com'))
console.log(chalk.green('success!'))
console.log(chalk.green('success!'+chalk.blue.underline.bold.inverse.red('get yours products')))
const arg = process.argv[2]
if(arg === 'add')
{
    console.log('add it')
}
else if(arg === 'remove')
{
    console.log('remove it')
}*/
yargs.version('1.1.0')
// add,remove,edit,delete //
yargs.command({
    command:'add',
    describe:'adding note in my list',
    builder:{
            title:{
                describe:'add Note',
                   demandOption : true,
                type : 'string'
            },
            body:{
                describe:'thsi is note body',
                demandOption : true,
                type: 'string'
            }

    },
    handler: function(argv){
     notes.addNotes(argv.title,argv.body)    
    }
})
yargs.command({
    command:'remove',
    describe:'remove note from my list',
    handler: function(){
        console.log('remove note...')
    }
})
yargs.command({
    command:'read',
    describe:'read note from list', 
    handler: function(){
        console.log(' read note..')
    }
})
yargs.command({
    command:'edit',
    describe:'edit note in list',
    handler: function(){
        console.log(' edit note..')
    }
})



console.log(yargs.argv)