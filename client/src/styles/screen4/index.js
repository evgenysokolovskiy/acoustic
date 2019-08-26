/* SCREEN №4 */

import styled from 'styled-components'
import { device } from '../../device/'
import 'material-icons'
import { colorScheme } from '../colorScheme'

export const RadioboxWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: ${colorScheme.radioboxWrap};
    position: relative;

    @media ${device.mobileS} {
        flex-direction: column;
    }
`
export const RadioboxPlayer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 20px;
    font-family: 'Material Icons';
    width: 250px;
    border: 1px solid #000;
    box-shadow: 2px 2px 5px #000;
`

export const RadioboxPoster = styled.div`
    width: 100%;
    height: 250px;
    background-size: contain;
    border-bottom: 1px solid #000;
`

export const RadioboxButtons = styled.div`
    background-color: ${colorScheme.radioboxButtons};
    color: ${colorScheme.radioboxButtonsColor};
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`
export const RadioboxPrevElem = styled.div`
    font-size: 3.4rem;
`
export const RadioboxPlayElem = styled.div`
    font-size: 3.4rem;
`
export const RadioboxNextElem = styled.div`
    font-size: 3.4rem;
`
export const RadioboxWrapText = styled.div`
    width: 250px;
`
export const RadioboxTitle = styled.h4`
    color: ${colorScheme.radioboxTitle};
    font-size: 1.5em;
`
export const RadioboxTitleText = styled.p`
    color: ${colorScheme.radioboxTitleText};
    font-size: 1.2em;
`
// Иконка главное окно
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
`
/* Footer */
export const FooterWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 10vh;
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
