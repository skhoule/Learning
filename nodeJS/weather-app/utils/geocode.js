const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2tob3VsZSIsImEiOiJjanRxZGIyOTMwZTQ1NDNtMmpnb2ZwZmFiIn0.D6hKgSM3aW51QFKRXZJadA`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find locaiton!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode

// const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/NewYorkCity.json?access_token=pk.eyJ1Ijoic2tob3VsZSIsImEiOiJjanRxZGIyOTMwZTQ1NDNtMmpnb2ZwZmFiIn0.D6hKgSM3aW51QFKRXZJadA";
// request({ url: url2, json: true, time: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service! \n', error)
//     } else if (response.body.features.length === 0){
//         console.log('Unable to find locaiton')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longtitude = response.body.features[0].center[0]
//         console.log(latitude, longtitude, '\nTime:' + response.elapsedTime + 'ms ');
//     }
// })