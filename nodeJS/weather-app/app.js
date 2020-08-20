const request = require('request')

const url = 'https://api.darksky.net/forecast/e4c81fdec54d67dcd3845f444be30c59/37.8267,-122.4233'
request({ url: url, json: true, time: true }, (error,response) => {
    if (error) {
        console.log('Unable to connect to weather service! \n', error)

    } else if (response.body.error){
        console.log('Error Code: '+ response.body.code,'\n' + response.body.error)
    } else {
        console.log(`${response.body.daily.data[0].summary} It is corrently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain.`, '\nTime:' + response.elapsedTime + 'ms');
    }
})

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/NewYorkCity.json?access_token=pk.eyJ1Ijoic2tob3VsZSIsImEiOiJjanRxZGIyOTMwZTQ1NDNtMmpnb2ZwZmFiIn0.D6hKgSM3aW51QFKRXZJadA";
request({ url: url2, json: true, time: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service! \n', error)
    } else if (response.body.features.length === 0){
        console.log('Unable to find locaiton')
    } else {
        const latitude = response.body.features[0].center[1]
        const longtitude = response.body.features[0].center[0]
        console.log(latitude, longtitude, '\nTime:' + response.elapsedTime + 'ms ');
    }
})