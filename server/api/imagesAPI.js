const fs = require('fs')

const poster = 'images/poster.jpg'
const poster_time = 'images/poster_time.jpg'
const poster_nobody = 'images/poster_nobody.jpg'
const poster_backToSchool = 'images/poster_backToSchool.jpg'
const poster_seattleWaveRadio = 'images/radio/poster_seattleWaveRadio.jpg'
const poster_partyviberadio = 'images/radio/poster_partyviberadio.png'
const poster_ffhacoustichits = 'images/radio/poster_ffhacoustichits.png'

const images = [
    poster,
    poster_time,
    poster_nobody,
    poster_backToSchool,
    poster_seattleWaveRadio,
    poster_partyviberadio,
    poster_ffhacoustichits
]

module.exports = function(app) {
    images.forEach(item => {
        app.get(`/api/${item}`, (req, res) => {
            fs.createReadStream(`./data/${item}`).pipe(res)
        })
    })
}
