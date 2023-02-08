const fs = require('fs')
//fs.writeFileSync('notes.txt','hi!this is just sample text...')
try{
fs.appendFileSync('notes.txt','hi!again i append some sample text in this file')
console.log('append some text into notes file')
}catch(err)
{
    console.log(err)
}
