/* DESCRIPTION STYLES*/

import styled from 'styled-components'
import 'material-icons'
import { colorScheme } from '../colorScheme'

// Контейнер
export const DescriptionWrapper = styled.div`
    display: none;
    height: 100vh;
    overflow-y: scroll;
    flex: 0.5;
    padding: 2% 3%;
    font-size: 1.2rem;
`
// Иконка закрыть
export const DescriptionIconClose = styled.div`
    position: absolute;
    top: 4%;
    right: 2%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.asideIcon};

    &:hover {
        color: ${colorScheme.asideIconHover};
    }
`
// Наименование альбома
export const DescriptionNameAlbum = styled.h2`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 1.7rem;
    color: ${colorScheme.posterNameAlbum};
`
// Исполнитель
export const DescriptionArtist = styled.h5`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterArtist};
    margin-bottom: 1rem;
    font-size: 1.3rem;
`
// Основной текст
export const DescriptionText = styled.p`
    font-size: 1.2rem;
`
