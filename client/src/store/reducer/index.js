import { configAlbum } from '../../config'
import {
    ALBUM,
    INDEX_COMPOSITION,
    DURATION_COMPOSITION,
    CURRENT_TIME,
    RADIO_STATION,
    PLAY_MOBILE
} from '../actions/'

const initialState = {
    album: configAlbum[Object.keys(configAlbum)[0]], // первый альбом в configAlbum
    indexComposition: 0, // Первая композиция (индекс равен 0)
    currentTime: 0, // Проигрывание композиции не началось (время композиции равно 0)
    duration: [], // Продолжительность композиции

    playStation: '',
    playMobile: false // Воспроизведение аудио из мобильной версии
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

        default:
            return state
    }
}
