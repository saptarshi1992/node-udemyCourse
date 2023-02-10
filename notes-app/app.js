
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk =  require('chalk')
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
}*/
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
}