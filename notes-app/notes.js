const fs = require('fs')

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
    console.log('new Note added')
    
}
else{
    console.log('note title taken!')
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
    addNotes:addNotes
 }