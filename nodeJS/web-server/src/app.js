const path = require('path')
const express = require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.set('view engine','hbs  ')
//Serve Public Directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "rain",
        location: "New York"
    })
})

app.listen(3000, () => {
    console.log('Server is up on prot 3000 ');
})