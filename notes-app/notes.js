const fs = require('fs')

const setNotes =  function (){

}

const addNotes = function (title,body){
const notes = loadNotes()
notes.push({
    title:"data",
    body:"this is body"
})
saveNotes(JSON.stringify(notes))

}

const loadNotes =  function(){
    try{
        const loadNote =  fs.readFileSync('./notes.json')
        const data = loadNote.toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
    
}
const saveNotes = function (notes){

}


 module.exports = {
    setNotes:setNotes,
    addNotes:addNotes
 }