import styled from 'styled-components'
import { device } from '../device/'
import 'typeface-roboto-multilang'
import 'material-icons'
import { colorScheme } from './colorScheme'
import { poster } from '../api/images'

/* SCREEN №1 */

// Header - 100vh
export const HeaderWrap = styled.div`
    height: 100vh;
    position: relative;
    padding-top: 40vh;
    background: url(${poster}) 100% 100% no-repeat;
    background-size: cover;
    text-align: center;
`
export const RadioIcon = styled.div`
    position: absolute;
    top: 4%;
    right: 4%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.radioIcon};
    font-size: 1.6rem;

    &:hover {
        color: ${colorScheme.radioIconHover};
    }
`
export const Title = styled.h2`
    font-size: 1.8rem;
    color: ${colorScheme.title};
`
export const TitleText = styled.h6`
    font-size: 1.2rem;
    color: ${colorScheme.titleText};
`

// МЕНЮ
export const Navbar = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    font-size: 1.5rem;
    padding-top: 20px;

    @media ${device.mobileL} {
        justify-content: center;
        font-size: 1.3rem;
    }
`
// Ссылки навигационного меню
export const NavbarLink = styled.span`
    text-decoration: none;
    color: ${colorScheme.navbarLink};
    padding-top: 15px;
    cursor: pointer;

    &:hover {
        color: ${colorScheme.navbarLinkHover};
    }

    @media ${device.mobileL} {
        padding: 5px 10px;
    }
`
export const Copyright = styled.div`
    position: absolute;
    bottom: 4%;
    left: 4%;
    font-family: 'Material Icons';
    color: ${colorScheme.copyright};
    font-size: 1rem;

    &:after {
        padding-left: 5px;
        font-family: 'Source Sans Pro', sans-serif;
        content: 'João Hoyler Correia';
    }
`

/* SCREEN №2 */

// 2) Контейнер (наименование альбома, исполнителя, постер, плейлист) - 85vh
export const ContentWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    height: 85vh;
    padding-top: 5vh;

    @media ${device.mobileL} {
        height: auto;
        min-height: auto;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
    }
`
export const PosterNameAlbum = styled.h2`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterNameAlbum};
`
export const PosterArtist = styled.h5`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterArtist};
    margin-bottom: 4rem;
`
// Обёртка для части с постером
export const PosterWrap = styled.article`
    min-width: 60vh;
    min-height: 50vh;
    max-width: 60vh;
    max-height: 50vh;
    font-size: 2rem;

    @media ${device.mobileL} {
        width: 90%;
        min-width: 250px;
        max-width: 400px;
        min-height: auto;
        max-height: auto;
        font-size: 2rem;
    }
`
// Обёртка для изображения
// Для позиционирования PlayMobile
export const PosterImageWrap = styled.div`
    @media ${device.mobileL} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
// Изображение
export const PosterImage = styled.img`
    width: 100%;
    height: auto;
    background-size: cover;
    border-radius: 0.2rem;

    @media ${device.mobileL} {
        position: absolute;
    }
`
export const PosterMetadata = styled.p`
    font-size: 1.2rem;

    @media ${device.mobileL} {
        display: none;
    }
`
// Шкала прогресса под постером
export const ScrabberPoster = styled.div`
    width: 99%;
    height: 2px;
    border-radius: 0.1rem;
    background-color: ${colorScheme.scrabberPoster};
    cursor: pointer;
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
    font-size: 1.6rem;
    margin-left: 4rem;
    padding: 80px 0 50px 0;

    @media ${device.mobileL} {
        margin: 0;
        font-size: 1.8rem;
    }
`
// КОНТЕЙНЕР ДЛЯ ПЛЕЕРА
export const PlayerWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: 15vh;
    background-image: ${colorScheme.playerWrap};

    @media ${device.mobileL} {
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

    @media ${device.mobileL} {
        font-size: 2.4rem;
    }
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

    @media ${device.mobileL} {
        font-size: 1.4rem;
    }
`
// Мобильная версия плеера
export const PlayMobile = styled.div`
    display: none;
    font-family: 'Material Icons';
    font-size: 10rem;
    color: rgba(200, 200, 200, 0.8);
    z-index: 999;

    @media ${device.mobileL} {
        display: block;
    }
`
/* SCREEN №3 */
// Описание альбомов - 100vh
export const DescriptionWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    height: 100vh;

    @media ${device.mobileL} {
        display: none;
    }
    @media ${device.laptop} {
        display: none;
    }
`
export const DescriptionArticle = styled.article`
    flex: 1;
    margin: 0 2rem;
    padding: 2rem;
    background-color: ${colorScheme.descriptionArticle};
`
export const DescriptionImage = styled.div`
    background-size: contain;
    width: 300px;
    height: 200px;
    padding: 20px;
`
export const DescriptionText = styled.p`
    font-size: 1.4rem;
`

/* Footer */
export const FooterWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 2rem;
    background-color: ${colorScheme.footerWrap};
    font-family: 'Material Icons';
    color: ${colorScheme.footerWrapColor};
    font-size: 1rem;

    &:after {
        padding-left: 5px;
        font-family: 'Source Sans Pro', sans-serif;
        content: 'Лето Наших Надежд", 2019';
    }
`
