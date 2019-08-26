const express = require('express')
const app = express()
const path = require('path')
/*
const port = process.env.PORT || 5000
const server = require('http')
    .Server(app)
    .listen(port)
const path = require('path')
const io = require('socket.io')(server)
const sockets = require('./server/sockets')(io)
*/

const dataSoundAPI = {
    url: '/api/audio/',
    dir: './data/sound/'
}
/*
const dataVideoAPI = {
    url: '/api/video/',
    dir: './data/video/'
}
require('./server/api/videoAPI')(app, dataVideoAPI)
*/
require('./server/api/soundAPI')(app, dataSoundAPI)
require('./server/api/imagesAPI')(app)

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json())

module.exports = app
