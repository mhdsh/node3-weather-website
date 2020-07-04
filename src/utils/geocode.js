const request = require('request')


const geocode = (address, callback) => {
    const ACCESS_TOKEN = 'pk.eyJ1IjoibWhkeHNoIiwiYSI6ImNrYno5cjhoZjEyYnkyeG80b2pmMzlmeDQifQ.vEt4oSaJ_PyKPiCsRslaiw'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + ACCESS_TOKEN + '&limit=1'

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode