const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locale = process.argv[ 2 ]
console.log(locale);

if (!locale) {
    console.log('Please provide location.')
} else {
    geocode(locale, (geocodeError, {latitude, longtitude, location}) => {
        if (geocodeError) {
            // Instead of using else, Return stops execution.
            return console.log(geocodeError);
        }

        forecast(latitude, longtitude, (forecastError, forecastData) => {
            if (forecastError) {
                return console.log(forecastErrorr);
            }
            console.log(location);
            console.log(forecastData);

        })
    })

}
