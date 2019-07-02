/* Взаимодействие с клиентом через socket */
const path = require('path')
const getDurationSong = require('./helpers/duration')
const fs = require('fs')

module.exports = function sockets(io) {
    let album
    io.on('connection', socket => {
        socket.on('album', album => {
            new Promise((resolve, reject) => {
                try {
                    const duration = getDurationSong(
                        path.resolve(__dirname, `../data/sound/${album}/`)
                    )
                    return resolve(duration)
                } catch (err) {
                    reject(console.error(err))
                }
            }).then(duration => socket.emit('duration', duration))
        })
    })
}
