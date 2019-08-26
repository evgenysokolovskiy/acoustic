/* SCREEN №2 */

import styled from 'styled-components'
import { device } from '../../device/'
import 'material-icons'
import { colorScheme } from '../colorScheme'

// 2) Контейнер (наименование альбома, исполнителя, постер, плейлист) - 85vh
export const ContentWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
    height: 85vh;
    padding-top: 5vh;
    position: relative;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }

    @media ${device.portraitS} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }

    @media ${device.portraitM} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }

    @media ${device.portraitL} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }

    @media ${device.portraitXl} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        height: auto;
        min-height: 100vh;
    }

    @media ${device.landscapeM} {
        height: auto;
        min-height: 100vh;
    }

    @media ${device.landscapeL} {
        height: auto;
        min-height: 100vh;
    }

    @media ${device.landscapeXl} {
        height: auto;
        min-height: 100vh;
    }
`
// Наименование альбома
export const PosterNameAlbum = styled.h2`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterNameAlbum};

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 2rem;
    }

    @media ${device.portraitS} {
        font-size: 2.4rem;
    }

    @media ${device.portraitM} {
        font-size: 2.8rem;
    }

    @media ${device.portraitL} {
        font-size: 3.2rem;
    }

    @media ${device.portraitXl} {
        font-size: 3.6rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 1.6rem;
    }

    @media ${device.landscapeM} {
        font-size: 1.8rem;
    }

    @media ${device.landscapeL} {
        font-size: 2rem;
    }

    @media ${device.landscapeXl} {
        font-size: 2.2rem;
    }
`
// Исполнитель
export const PosterArtist = styled.h4`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterArtist};
    margin-bottom: 0.8rem;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 1.4rem;
        margin-bottom: 0;
    }

    @media ${device.portraitS} {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    @media ${device.portraitM} {
        font-size: 2.2rem;
        margin-bottom: 3rem;
    }

    @media ${device.portraitL} {
        font-size: 2.4rem;
        margin-bottom: 4rem;
    }

    @media ${device.portraitXl} {
        font-size: 2.6rem;
        margin-bottom: 9rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 1.2rem;
    }

    @media ${device.landscapeM} {
        font-size: 1.4rem;
    }

    @media ${device.landscapeL} {
        font-size: 1.6rem;
    }

    @media ${device.landscapeXl} {
        font-size: 1.8rem;
    }
`
// Обёртка для части с постером
export const PosterWrap = styled.article`
    min-width: 60vh;
    min-height: 50vh;
    max-width: 60vh;
    max-height: 50vh;
    font-size: 2rem;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        width: 90%;
        min-width: 200px;
        max-width: 240px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }

    @media ${device.portraitS} {
        width: 90%;
        min-width: 250px;
        max-width: 400px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }

    @media ${device.portraitM} {
        width: 90%;
        min-width: 250px;
        max-width: 400px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }

    @media ${device.portraitL} {
        width: 90%;
        min-width: 250px;
        max-width: 400px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }

    @media ${device.portraitXl} {
        width: 90%;
        min-width: 250px;
        max-width: 400px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }
`
// Изображение
export const PosterImage = styled.img`
    width: 100%;
    height: auto;
    background-size: cover;
    border-radius: 0.2rem;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        position: absolute;
    }

    @media ${device.portraitS} {
        position: absolute;
    }

    @media ${device.portraitM} {
        position: absolute;
    }

    @media ${device.portraitL} {
        position: absolute;
    }

    @media ${device.portraitXl} {
        position: absolute;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        position: absolute;
    }

    @media ${device.landscapeM} {
        position: absolute;
    }

    @media ${device.landscapeL} {
        position: absolute;
    }

    @media ${device.landscapeXl} {
        position: absolute;
    }
`
// Метаданные
export const PosterMetadata = styled.p`
    font-size: 1.2rem;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        display: none;
    }

    @media ${device.portraitS} {
        display: none;
    }

    @media ${device.portraitM} {
        display: none;
    }

    @media ${device.portraitL} {
        display: none;
    }

    @media ${device.portraitXl} {
        display: none;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 0.8rem;
    }

    @media ${device.landscapeM} {
        font-size: 0.9rem;
    }

    @media ${device.landscapeL} {
        font-size: 1rem;
    }

    @media ${device.landscapeXl} {
        font-size: 1.1rem;
    }
`
// Шкала прогресса под постером
export const ScrabberPoster = styled.div`
    width: 99%;
    height: 2px;
    border-radius: 0.1rem;
    background-color: ${colorScheme.scrabberPoster};
    cursor: pointer;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        display: none;
    }

    @media ${device.portraitS} {
        display: none;
    }

    @media ${device.portraitM} {
        display: none;
    }

    @media ${device.portraitL} {
        display: none;
    }

    @media ${device.portraitXl} {
        display: none;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        display: none;
    }

    @media ${device.landscapeM} {
        display: none;
    }

    @media ${device.landscapeL} {
        display: none;
    }

    @media ${device.landscapeXl} {
        display: none;
    }
`
export const ProgressPoster = styled.div`
    pointer-events: none;
    width: 0.01px;
    height: 100%;
    border-radius: 0.1rem;
    background-color: ${colorScheme.progressPoster};
    z-index: 1;
`
// Плейлист
export const PlaylistWrap = styled.div`
    flex-direction: column;
    font-size: 1.6rem;
    /*margin-left: 4rem;*/
    padding: 80px 0 50px 0;
    cursor: pointer;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        margin: 0;
        padding-top: 2.5rem;
        font-size: 1.2rem;
    }

    @media ${device.portraitS} {
        margin: 0;
        padding-top: 2rem;
        font-size: 1.8rem;
    }

    @media ${device.portraitM} {
        margin: 0;
        padding-top: 3rem;
        font-size: 2rem;
    }

    @media ${device.portraitL} {
        margin: 0;
        padding-top: 4rem;
        font-size: 2.2rem;
    }

    @media ${device.portraitXl} {
        margin: 0;
        padding-top: 9rem;
        font-size: 2.4rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 0.8rem;
        margin-left: 0;
        padding-top: 10vh;
    }

    @media ${device.landscapeM} {
        font-size: 1rem;
        margin-left: 0;
        padding-top: 10vh;
    }

    @media ${device.landscapeL} {
        font-size: 1.2rem;
        margin-left: 0;
        padding-top: 10vh;
    }

    @media ${device.landscapeXl} {
        font-size: 1.4rem;
        margin-left: 0;
        padding-top: 10vh;
    }
`
export const PlaylistItem = styled.p`
    color: ${colorScheme.playlistItem};
`
export const PlaylistItemPress = styled.span`
    color: ${colorScheme.playlistItemPress};
`
// КОНТЕЙНЕР ДЛЯ ПЛЕЕРА
export const PlayerWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: 15vh;
    background-image: ${colorScheme.playerWrap};

    /* Portrait orientation */

    @media ${device.portraitXs} {
        display: none;
    }

    @media ${device.portraitS} {
        display: none;
    }

    @media ${device.portraitM} {
        display: none;
    }

    @media ${device.portraitL} {
        display: none;
    }

    @media ${device.portraitXl} {
        display: none;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        display: none;
    }

    @media ${device.landscapeM} {
        display: none;
    }

    @media ${device.landscapeL} {
        display: none;
    }

    @media ${device.landscapeXl} {
        display: none;
    }
`
// Иконка проигрывания композиции
export const PlayIconWrap = styled.div`
    float: left;
    width: 10%;
    text-align: center;
`
export const PlayIcon = styled.span`
    font-family: 'Material Icons';
    font-size: 4.6rem;
    cursor: pointer;
    color: ${colorScheme.playIcon};
`
// Обертка для шкалы проигрывания
export const ProgressBarWrap = styled.div`
    position: relative;
    float: left;
    width: 65%;
    height: 40%;
    border-right: 1px solid #666;
    border-left: 1px solid #666;
`
// Шкала проигрывания
export const Scrabber = styled.div`
    background-color: ${colorScheme.scrabber};
    position: absolute;
    left: 5%;
    width: 90%;
    height: 100%;
    border-radius: 0.2rem;
    cursor: pointer;
`
// Прогресс бар
export const Progress = styled.div`
    pointer-events: none;
    width: 0.01px;
    height: 100%;
    border-radius: 0.1rem;
    background-color: ${colorScheme.progress};
    z-index: 100;
`
// Таймлайн
export const Timeline = styled.div`
    float: left;
    width: 25%;
    text-align: center;
    font-family: monospace;
    font-size: 3rem;
    color: ${colorScheme.timeline};
`
// Иконка переход в главное окно
export const HomeIcon = styled.div`
    position: absolute;
    top: 4%;
    right: 4%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.progress};
    font-size: 3rem;

    &:hover {
        color: ${colorScheme.radioIconHover};
    }

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 2rem;
    }

    @media ${device.portraitS} {
        font-size: 3rem;
    }

    @media ${device.portraitM} {
        font-size: 4rem;
    }

    @media ${device.portraitL} {
        font-size: 5rem;
    }

    @media ${device.portraitXl} {
        font-size: 5rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 2rem;
        top: 2%;
    }

    @media ${device.landscapeM} {
        font-size: 2.5rem;
        top: 2%;
    }

    @media ${device.landscapeL} {
        font-size: 3rem;
        top: 2%;
    }

    @media ${device.landscapeXl} {
        font-size: 3.5rem;
        top: 2%;
    }
`
// Мобильная версия плеера
// Обёртка для изображения
// Для позиционирования PlayMobile
export const PosterImageWrap = styled.div`
    /* Portrait orientation */

    @media ${device.portraitXs} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.portraitS} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.portraitM} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.portraitL} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.portraitXl} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.landscapeM} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.landscapeL} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.landscapeXl} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const PlayMobile = styled.div`
    display: none;
    font-family: 'Material Icons';
    font-size: 10rem;
    color: rgba(200, 200, 200, 0.8);
    z-index: 999;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        display: block;
    }

    @media ${device.portraitS} {
        display: block;
    }

    @media ${device.portraitM} {
        display: block;
    }

    @media ${device.portraitL} {
        display: block;
    }

    @media ${device.portraitXl} {
        display: block;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        display: block;
        font-size: 6rem;
    }

    @media ${device.landscapeM} {
        display: block;
        font-size: 6rem;
    }

    @media ${device.landscapeL} {
        display: block;
        font-size: 6rem;
    }

    @media ${device.landscapeXl} {
        display: block;
        font-size: 10rem;
    }
`
