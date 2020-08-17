const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday'
// }

// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data =JSON.parse(dataJSON)
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Sal'
data.age = 30

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)

console.log(data)
