const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e4c81fdec54d67dcd3845f444be30c59/${latitude},${longitude}`
    request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
        callback('Error Code: ' + body.code + '\n ' + body.error, undefined)
    } else {
        callback(undefined, {
            temperature: body.currently.temperature,
            precipitation: body.currently.precipProbability,
            summary: body.daily.data[ 0 ].summary,
            temperatureHigh: body.daily.data[ 0 ].temperatureHigh,
            temperatureLow: body.daily.data[0].temperatureLow
            })
        }
    })
}

module.exports = forecast

//Before
// const url = 'https://api.darksky.net/forecast/e4c81fdec54d67dcd3845f444be30c59/37.8267,-122.4233'
// request({ url: url, json: true, time: true }, (error,response) => {
//     if (error) {
//         console.log('Unable to connect to weather service! \n', error)

//     } else if (response.body.error){
//         console.log('Error Code: '+ response.body.code,'\n' + response.body.error)
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is corrently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain.`, '\nTime:' + response.elapsedTime + 'ms');
//     }
// })
