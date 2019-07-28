/* TEXTS STYLES */

import styled from 'styled-components'
import 'material-icons'
import { colorScheme } from '../colorScheme'

// Контейнер
export const TextsWrapper = styled.div`
    display: none;
    height: 100vh;
    overflow-y: scroll;
    flex: 0.5;
    padding: 2% 3%;
    font-size: 1.2rem;
`
// Кнопка закрыть
export const TextsIconClose = styled.div`
    position: absolute;
    top: 4%;
    right: 2%;
    font-family: 'Material Icons';
    cursor: pointer;
    color: ${colorScheme.asideIcon};
    font-size: 1.6rem;

    &:hover {
        color: ${colorScheme.asideIconHover};
    }
`
// Исполнитель
export const TextsArtist = styled.h5`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: ${colorScheme.posterArtist};
    margin-bottom: 1rem;
    font-size: 1.3rem;
`
// Основной текст
export const TextsTexts = styled.p`
    font-size: 1.2rem;
`
