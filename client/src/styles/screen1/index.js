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
    right: 8%;

    @media ${device.mobileL} {
        display: none;
    }
`
// Тексты песен
export const TextsIcon = styled(RadioIcon)`
    right: 12%;

    @media ${device.mobileL} {
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
`

/* Заголовок */

// Основной заголовок
export const Title = styled.h2`
    font-size: 1.8rem;
    color: ${colorScheme.title};
`
// Подпись
export const TitleText = styled.h6`
    font-size: 1.2rem;
    color: ${colorScheme.titleText};
`

/* Меню */
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
    color: ${colorScheme.navbarLink};
    padding-top: 15px;
    cursor: pointer;

    @media ${device.mobileL} {
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

    @media ${device.mobileL} {
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
`
