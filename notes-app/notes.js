const fs = require('fs')
const chalk = require('chalk')

const setNotes =  function (){

}

const addNotes = function (title,body){
const notes = loadNotes()
const duplicateNote = notes.filter(function (note){
    return note.title === title
})
if(duplicateNote.length === 0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green('new Note added'))
    
}
else{
    console.log(chalk.red('note title taken!'))
}

}

const removeNotes =  function(title){
const notes =  loadNotes()
const keepNote = notes.filter(function(note){
    return note.title !== title
})
if(keepNote.length == notes.length){
    console.log(chalk.red('title is not present in json file'))
}else{
    saveNotes(keepNote)
    console.log(chalk.green('note is removed..')) 
}

}




const loadNotes =  function(){
    try{
        const loadNote =  fs.readFileSync('notes.json')
        const data = loadNote.toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
    
}
const saveNotes = function (notes){
    const addData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',addData)

}


 module.exports = {
    setNotes:setNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
 }