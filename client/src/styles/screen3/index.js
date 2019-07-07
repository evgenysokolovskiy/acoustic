/* SCREEN №3 */

import styled from 'styled-components'
import { device } from '../../device/'
import 'material-icons'
import { colorScheme } from '../colorScheme'

// Описание альбомов - 100vh
export const DescriptionWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    height: 100vh;
    position: relative;

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
export const HomeIcon = styled.div`
    position: absolute;
    top: 4%;
    right: 4%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.progress};
    font-size: 2rem;

    &:hover {
        color: ${colorScheme.radioIconHover};
    }
`
