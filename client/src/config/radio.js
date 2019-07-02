// ПОСТЕРЫ
import {
    poster_seattleWaveRadio,
    poster_partyviberadio,
    poster_ffhacoustichits
} from '../api/images'

// ОСНОВНЫЕ ДАННЫЕ
export const configRadioStations = {
    seattleWaveRadio: {
        name: 'seattleWaveRadio',
        src: 'http://74.208.161.22:8001/stream',
        poster: poster_seattleWaveRadio,
        genre: 'acoustic'
    },
    partyVibeRadio: {
        name: 'partyviberadio',
        src: 'http://www.partyviberadio.com:8000/;listen.pls?sid=1',
        poster: poster_partyviberadio,
        genre: 'reggey'
    },
    ffhacoustichits: {
        name: 'ffhAcousticHits',
        src: 'http://streams.ffh.de/ffhchannels/mp3/playerid:RTFFHTunein/hqacoustichits.mp3',
        poster: poster_ffhacoustichits,
        genre: 'acoustic'
    }
}
