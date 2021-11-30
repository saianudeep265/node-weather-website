const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52aaefe4e4c0d1916239b7d630820b93&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' farenheit out. It feels like ' + body.current.feelslike + ' farenhiet out.')
        }
    })
}

module.exports = forecast