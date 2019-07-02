/*
import React from 'react'
import { TextsWrap } from '../styles/styled'
import { texts } from '../config/'

export const Texts = props => {
    const str = texts[props.album.name][props.indexComposition].match(
        /[А-ЯA-Z]+[^А-ЯA-Z]*|[^А-ЯA-Z]+/g
    ) // Разделить текст на строки по заглавным буквам
    const list = str.map((item, i) => <p key={i}>{item}</p>)

    return <TextsWrap>{list}</TextsWrap>
}
*/
