/* SCREEN №1 */

import styled from 'styled-components'
import { device } from '../../device/'
import 'material-icons'
import { colorScheme } from '../colorScheme'
import { poster } from '../../api/images'

// Header - 100vh
export const HeaderWrap = styled.div`
    flex: 1;
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
export const DescriptionIcon = styled(RadioIcon)`
    right: 8%;

    @media ${device.mobileL} {
        display: none;
    }
`
export const TextsIcon = styled(RadioIcon)`
    right: 12%;

    @media ${device.mobileL} {
        display: none;
    }
`

export const TestWrapper = styled.div`
    display: none;
    height: 100vh;
    overflow-y: scroll;
    flex: 0.5;
    padding: 2% 3%;
    font-size: 1.2rem;
`
export const TextsWrap = styled(RadioIcon)`
    right: 12%;
    font-size: 0.9rem;
    color: ${colorScheme.textsWrap};

    @media ${device.mobileL} {
        display: none;
    }
`
export const AsideIconClose = styled(RadioIcon)`
    right: 2%;
    color: ${colorScheme.asideIcon};

    &:hover {
        color: ${colorScheme.asideIconHover};
    }
`
export const PosterNameAlbum = styled.h2`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 1.7rem;
    color: ${colorScheme.posterNameAlbum};
`
export const PosterArtist = styled.h5`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterArtist};
    margin-bottom: 1rem;
    font-size: 1.3rem;
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
