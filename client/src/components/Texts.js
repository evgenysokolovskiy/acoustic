import React from 'react'
import { TextsWrapper, TextsIconClose, TextsArtist, TextsTexts } from '../styles/screen1/texts'
import { texts } from '../config/'

export default class Texts extends React.Component {
    componentDidMount() {
        this.props.getTxtElem(this.txtElem)
    }

    handlePressCloseIcon = () => {
        this.txtElem.style.cssText += 'display: none;'
    }

    render() {
        const str = texts[this.props.album.name][this.props.indexComposition].match(
            /[А-ЯA-Z]+[^А-ЯA-Z]*|[^А-ЯA-Z]+/g
        ) // Разделить текст на строки по заглавным буквам
        const list = str.map((item, i) => <TextsTexts key={i}>{item}</TextsTexts>)
        return (
            <TextsWrapper
                style={{ fontSize: '1.2rem' }}
                ref={txtElem => {
                    this.txtElem = txtElem
                }}
            >
                <TextsIconClose onClick={this.handlePressCloseIcon}>close</TextsIconClose>
                <TextsArtist style={{ whiteSpace: 'nowrap' }}>
                    {this.props.album.list[this.props.indexComposition]}
                </TextsArtist>
                {list}
            </TextsWrapper>
        )
    }
}
