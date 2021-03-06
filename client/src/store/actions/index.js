import io from 'socket.io-client'

/* propTypes */
export const ALBUM = 'ALBUM'
export const INDEX_COMPOSITION = 'INDEX_COMPOSITION'
export const DURATION_COMPOSITION = 'DURATION_COMPOSITION'
export const CURRENT_TIME = 'CURRENT_TIME'
export const PLAY = 'PLAY'
export const RADIO_STATION = 'RADIO_STATION'
// Элементы DOM
export const AUDIO_ELEM = 'AUDIO_ELEM'
export const HEADER_ELEM = 'HEADER_ELEM'
export const POSTER_ELEM = 'POSTER_ELEM'
export const RADIOBOX_ELEM = 'RADIOBOX_ELEM'

// Данные альбома
export function changeAlbum(album) {
    return {
        type: ALBUM,
        payload: album
    }
}

// Изменить индекс композиции
export function changeIndexComposition(index) {
    return {
        type: INDEX_COMPOSITION,
        payload: index
    }
}

// Изменить продолжительность композиции (при смене композиции)
export function changeDurationComposition(duration) {
    return {
        type: DURATION_COMPOSITION,
        payload: duration
    }
}

// Изменить текущий момент композиции
export function changeCurrentTime(currentTime) {
    return {
        type: CURRENT_TIME,
        payload: currentTime
    }
}

// Воспроизведение композиции
export function isPlay(play) {
    return {
        type: PLAY,
        payload: play
    }
}

// Изменить проигрываемую радиостанцию
export function changeRadioStation(radioStation) {
    return {
        type: RADIO_STATION,
        payload: radioStation
    }
}

/* Получить элементы DOM */

// Получить элемент audio
export function getAudioElem(audioElem) {
    return {
        type: AUDIO_ELEM,
        payload: audioElem
    }
}

// Получить элемент header
export function getHeaderElem(headerElem) {
    return {
        type: HEADER_ELEM,
        payload: headerElem
    }
}

// Получить элемент poster
export function getPosterElem(posterElem) {
    return {
        type: POSTER_ELEM,
        payload: posterElem
    }
}

// Получить элемент radiobox
export function getRadioboxElem(radioboxElem) {
    return {
        type: RADIOBOX_ELEM,
        payload: radioboxElem
    }
}

/* MIDDLEWARE */

// 1) Отправить на сервер имя выбранного альбома
// 2) В ответ получить с сервера массив с продолжительностью композиций
export function getMetadataFromServer(album) {
    const socket = io.connect('/')
    return dispatch => {
        socket.emit('album', album)
        socket.on('duration', duration => {
            dispatch(changeDurationComposition(duration))
        })
    }
}
