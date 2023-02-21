const fs = require ('fs')
//write file//
const jsondata =  {
    name:"shon",
    age:"40"
}
const josnwritedata  = JSON.stringify(jsondata)

fs.writeFileSync('1-one.json',josnwritedata)

//read file//

const datajson = fs.readFileSync('1-one.json')
const databuffer = datajson.toString()

const data = JSON.parse(databuffer)
console.log(data.name)
