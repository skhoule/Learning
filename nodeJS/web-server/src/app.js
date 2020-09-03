const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Degine path for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handle bars and views locaiton
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Static Serve Public Directory
app.use(express.static(publicDirectory))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Sal'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        help: 'Im trying to help you!',
        title: 'Help',
        name: 'Sal'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'An address must be provided!'
        })
    }
    geocode(req.query.address, (geocodeError, { latitude, longtitude, location } = {}) => {
        if (geocodeError) {
            return res.send({
                error: geocodeError
            })
        }
        forecast(latitude, longtitude, (forecastError, forecastData) => {
            if (forecastError) {
                return res.send({
                    error: forecastError
                })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error:'You must provide search term'
        })
    }

    console.log(req.query.search);
    res.send({
        products: []
    })
})

// Error Routes
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Sal',
        errorMessage: 'Help articlee not found'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sal',
        errorMessage: 'Page not found'

    })
})
app.listen(port, () => {
    console.log('Server is up on port:'+port);
})