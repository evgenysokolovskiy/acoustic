import React from 'react'
import { TextsWrap, TestWrapper, AsideIconClose, PosterArtist } from '../styles/screen1/'
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
        const list = str.map((item, i) => <p key={i}>{item}</p>)
        return (
            <TestWrapper
                style={{ fontSize: '1.2rem' }}
                ref={txtElem => {
                    this.txtElem = txtElem
                }}
            >
                <AsideIconClose onClick={this.handlePressCloseIcon}>close</AsideIconClose>
                <PosterArtist style={{ whiteSpace: 'nowrap' }}>
                    {this.props.album.list[this.props.indexComposition]}
                </PosterArtist>
                <p style={{ fontSize: '1.2rem' }}>{list}</p>
            </TestWrapper>
        )
    }
}
