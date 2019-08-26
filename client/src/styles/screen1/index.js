/* SCREEN №1 */

import styled from 'styled-components'
import { device } from '../../device/'
import 'material-icons'
import { colorScheme } from '../colorScheme'
import { poster } from '../../api/images'

/* Контейнер - 100vh */

export const HeaderWrap = styled.div`
    flex: 1;
    height: 100vh;
    position: relative;
    padding-top: 40vh;
    background: url(${poster}) 100% 100% no-repeat;
    background-size: cover;
    text-align: center;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        padding-top: 30vh;
    }

    @media ${device.portraitS} {
        padding-top: 30vh;
    }

    @media ${device.portraitM} {
        padding-top: 30vh;
    }

    @media ${device.portraitL} {
        padding-top: 30vh;
    }

    @media ${device.portraitXl} {
        padding-top: 30vh;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        padding-top: 20vh;
    }

    @media ${device.landscapeM} {
        padding-top: 20vh;
    }

    @media ${device.landscapeL} {
        padding-top: 20vh;
    }

    @media ${device.landscapeXl} {
        padding-top: 20vh;
    }
`

/* Иконки навигации */

// Радио
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
// Описание альбомов
export const DescriptionIcon = styled(RadioIcon)`
    right: 4%;

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
// Тексты песен
export const TextsIcon = styled(RadioIcon)`
    right: 8%;

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
// Стрелка вниз (перемещение на screen2)
export const Arrow = styled.div`
    position: absolute;
    bottom: 4%;
    right: 4%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.radioIcon};
    font-size: 3rem;

    &:hover {
        color: ${colorScheme.radioIconHover};
    }

    /* Portrait orientation */

    @media ${device.portraitXs} {
        bottom: 4%;
        font-size: 2rem;
    }

    @media ${device.portraitS} {
        bottom: 4%;
        font-size: 3rem;
    }

    @media ${device.portraitM} {
        font-size: 4rem;
        bottom: 4%;
    }

    @media ${device.portraitL} {
        font-size: 5rem;
        bottom: 4%;
    }

    @media ${device.portraitXl} {
        font-size: 5rem;
        bottom: 4%;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 2rem;
    }

    @media ${device.landscapeM} {
        font-size: 2.5rem;
    }

    @media ${device.landscapeL} {
        font-size: 3rem;
    }

    @media ${device.landscapeXl} {
        font-size: 3.5rem;
    }
`

/* Заголовок */

// Основной заголовок
export const Title = styled.h1`
    font-size: 1.8rem;
    color: ${colorScheme.title};

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 1.2rem;
    }

    @media ${device.portraitS} {
        font-size: 1.8rem;
    }

    @media ${device.portraitM} {
        font-size: 2rem;
    }

    @media ${device.portraitL} {
        font-size: 2.5rem;
    }

    @media ${device.portraitXl} {
        font-size: 3rem;
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
// Подпись
export const TitleText = styled.h4`
    font-size: 1.2rem;
    color: ${colorScheme.titleText};

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 1rem;
    }

    @media ${device.portraitS} {
        font-size: 1.2rem;
    }

    @media ${device.portraitM} {
        font-size: 1.4rem;
    }

    @media ${device.portraitL} {
        font-size: 1.6rem;
    }

    @media ${device.portraitXl} {
        font-size: 1.8rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 1rem;
    }

    @media ${device.landscapeM} {
        font-size: 1.1rem;
    }

    @media ${device.landscapeL} {
        font-size: 1.2rem;
    }

    @media ${device.landscapeXl} {
        font-size: 1.3rem;
    }
`

/* Меню */
export const Navbar = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    font-size: 1.5rem;
    padding-top: 20px;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        justify-content: center;
        font-size: 1.1rem;
    }

    @media ${device.portraitS} {
        justify-content: center;
        font-size: 1.5rem;
    }

    @media ${device.portraitM} {
        justify-content: center;
        font-size: 1.6rem;
    }

    @media ${device.portraitL} {
        justify-content: center;
        font-size: 1.7rem;
    }

    @media ${device.portraitXl} {
        justify-content: center;
        font-size: 2.5rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        padding-top: 0;
        font-size: 1.2rem;
    }

    @media ${device.landscapeM} {
        padding-top: 0;
        font-size: 1.3rem;
    }

    @media ${device.landscapeL} {
        padding-top: 0;
        font-size: 1.4rem;
    }

    @media ${device.landscapeXl} {
        padding-top: 0;
        font-size: 1.5rem;
    }
`
// Ссылки навигационного меню
export const NavbarLink = styled.span`
    color: ${colorScheme.navbarLink};
    padding-top: 15px;
    cursor: pointer;

    /* Portrait orientation */

    @media ${device.portraitXs} {
        padding: 5px 10px;
    }

    @media ${device.portraitS} {
        padding: 5px 10px;
    }

    @media ${device.portraitM} {
        padding: 5px 10px;
    }

    @media ${device.portraitL} {
        padding: 5px 10px;
    }

    @media ${device.portraitXl} {
        padding: 5px 10px;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        padding: 5px 10px;
    }

    @media ${device.landscapeM} {
        padding: 5px 10px;
    }

    @media ${device.landscapeL} {
        padding: 5px 10px;
    }

    @media ${device.landscapeXl} {
        padding: 5px 10px;
    }
`
export const NavbarLinkPress = styled.span`
    color: ${colorScheme.navbarLinkPress};
`
// Иконка проигрывания композиции
export const PlayIcon = styled.div`
    display: block;
    font-family: 'Material Icons';
    font-size: 10rem;
    color: rgba(200, 200, 200, 0.8);
    z-index: 999;

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
/* Копирайт */
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

    /* Portrait orientation */

    @media ${device.portraitXs} {
        font-size: 0.6rem;
    }

    /* Landscape orientation */

    @media ${device.landscapeS} {
        font-size: 0.6rem;
    }

    @media ${device.landscapeM} {
        font-size: 0.8rem;
    }

    @media ${device.landscapeL} {
        font-size: 0.8rem;
    }

    @media ${device.landscapeXl} {
        font-size: 0.8rem;
    }
`
