/* Получить длительность композиций */
const fs = require('fs')
const path = require('path')
const mm = require('music-metadata')
const util = require('util')

module.exports = async function(folderURL) {
    const songs = fs.readdirSync(folderURL) // Array with songs
    const arr = []

    await (async function() {
        for (let i = 0; i < songs.length; i++) {
            const data = await mm
                .parseFile(`${folderURL}/${songs[i]}`, { native: true })
                .then(metadata => {
                    return util.inspect(metadata.format.duration, {
                        showHidden: false,
                        depth: null
                    })
                })
                .catch(err => {
                    console.error(err.message)
                })
            arr.push(data)
        }
    })()
    return arr
}
