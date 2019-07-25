import React from 'react'
import { configAlbum } from '../config/'
import {
    DescriptionWrap,
    DescriptionArticle,
    DescriptionImage,
    DescriptionText,
    HomeIcon
} from '../styles/screen3/'

export default class Description extends React.Component {
    handlePressHomeIcon = () => {
        const elem = document.getElementById('header')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        const albums = Object.keys(configAlbum)
        const article = albums.map(item => (
            <DescriptionArticle key={configAlbum[item].name}>
                <h2>
                    Альбом: <b>{configAlbum[item].name}</b>
                </h2>
                <h5>
                    Исполнитель: <b>{configAlbum[item].author}</b>
                </h5>
                <DescriptionImage
                    style={{ background: `url(${configAlbum[item].poster}) 100% 100% no-repeat` }}
                />
                <DescriptionText>{configAlbum[item].description}</DescriptionText>
            </DescriptionArticle>
        ))

        return (
            <DescriptionWrap id="description">
                {article}
                <HomeIcon onClick={this.handlePressHomeIcon}>close</HomeIcon>
            </DescriptionWrap>
        )
    }
}
