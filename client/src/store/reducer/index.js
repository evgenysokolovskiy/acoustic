import { configAlbum } from '../../config'
import {
    ALBUM,
    INDEX_COMPOSITION,
    DURATION_COMPOSITION,
    CURRENT_TIME,
    PLAY,
    RADIO_STATION,
    // Элементы DOM
    AUDIO_ELEM,
    HEADER_ELEM,
    POSTER_ELEM,
    RADIOBOX_ELEM
} from '../actions/'

const initialState = {
    // первый альбом в configAlbum
    album: configAlbum[Object.keys(configAlbum)[0]],
    // Первая композиция (индекс равен 0)
    indexComposition: 0,
    // Проигрывание композиции не началось (время композиции равно 0)
    currentTime: 0,
    // Продолжительность композиции
    duration: [],
    // Воспроизведение аудио
    play: false,
    // Радиостанция
    radioStation: '',
    // Элементы DOM
    audioElem: null,
    headerElem: null,
    posterElem: null,
    radioboxElem: null
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ALBUM:
            return { ...state, album: action.payload }

        case INDEX_COMPOSITION:
            return { ...state, indexComposition: action.payload }

        case CURRENT_TIME:
            return { ...state, currentTime: action.payload }

        case DURATION_COMPOSITION:
            return { ...state, duration: action.payload }

        case PLAY:
            return { ...state, play: action.payload }

        case RADIO_STATION:
            return { ...state, radioStation: action.payload }

        // Получить элементы DOM
        case AUDIO_ELEM:
            return { ...state, audioElem: action.payload }

        case HEADER_ELEM:
            return { ...state, headerElem: action.payload }

        case POSTER_ELEM:
            return { ...state, posterElem: action.payload }

        case RADIOBOX_ELEM:
            return { ...state, radioboxElem: action.payload }

        default:
            return state
    }
}
