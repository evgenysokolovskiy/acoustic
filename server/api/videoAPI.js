const fs = require('fs')
const zlib = require('zlib')
const compress = zlib.createGzip()

module.exports = function(app, data) {
    const { url, dir } = data
    fs.readdir(dir, function(err, albums) {
        albums.forEach(album => {
            const param = album.charCodeAt(0) // Привести строку(наименование альбома) к числовому представлению
            fs.readdir(`${dir}${album}`, function(err, songs) {
                const length = songs.length // количество композиций в альбоме
                let path, folder
                for (let i = 0; i < length; i++) {
                    path = `${url}${param}/${i}.mp4`
                    folder = `${dir}${album}/_${i}.mp4`
                    createSoundBroadcast(path, folder)
                }
            })
        })
    })

    // Потоковое вещание (воспроизведение подгружаемых частей файла)
    function createSoundBroadcast(url, dir) {
        app.get(url, function(req, res) {
            const stat = fs.statSync(dir)
            const fileSize = stat.size
            const range = req.headers.range

            if (range) {
                const parts = range.replace(/bytes=/, '').split('-')
                const start = parseInt(parts[0], 10)
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1

                const chunksize = end - start + 1
                const file = fs.createReadStream(dir, { start, end })
                const head = {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`, // Передавать клиенту данные фрагментами
                    'Accept-Ranges': 'bytes', // Сообщить клиенту в каких единицах запрашивать фрагмент
                    'Content-Length': chunksize, // Длина фрагмента в байтах
                    'Content-Type': 'video/mp4' // Тип данных
                }

                res.writeHead(206, head) // 206 - используется для передачи данных фрагментами
                file.pipe(res)
            } else {
                const head = {
                    'Content-Length': fileSize,
                    'Content-Type': 'video/mp4',
                    'Accept-Encoding': 'br,gzip,deflate'
                }
                res.writeHead(200, head)
                fs.createReadStream(dir)
                    .pipe(compress)
                    .pipe(res)
            }
        })
    }
}
