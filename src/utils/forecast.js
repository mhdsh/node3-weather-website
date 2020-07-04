const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const API_KEY = '4a2437819376c7ef24cb110dc57723f5'
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=4a2437819376c7ef24cb110dc57723f5'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, 'It\'s currently ' + body.main.temp + ' degrees out.')
        }
    })
}

module.exports = forecast