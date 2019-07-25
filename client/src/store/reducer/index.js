import { configAlbum } from '../../config'
import {
    ALBUM,
    INDEX_COMPOSITION,
    DURATION_COMPOSITION,
    CURRENT_TIME,
    RADIO_STATION,
    PLAY_MOBILE,
    // Элементы
    HEADER_ELEM,
    POSTER_ELEM,
    RADIOBOX_ELEM
} from '../actions/'

const initialState = {
    album: configAlbum[Object.keys(configAlbum)[0]], // первый альбом в configAlbum
    indexComposition: 0, // Первая композиция (индекс равен 0)
    currentTime: 0, // Проигрывание композиции не началось (время композиции равно 0)
    duration: [], // Продолжительность композиции

    playStation: '',
    playMobile: false, // Воспроизведение аудио из мобильной версии

    // Элементы
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

        case RADIO_STATION:
            return { ...state, playStation: action.payload }

        case PLAY_MOBILE:
            return { ...state, playMobile: action.payload }

        // Получить элементы
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
