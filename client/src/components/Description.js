import React from 'react'
import { TestWrapper, AsideIconClose, PosterNameAlbum, PosterArtist } from '../styles/screen1/'

export default class Description extends React.Component {
    componentDidMount() {
        this.props.getDescriptionElem(this.descriptionElem)
    }

    handlePressCloseIcon = () => {
        this.descriptionElem.style.cssText += 'display: none;'
    }

    render() {
        const { name, author, description } = this.props.album
        return (
            <TestWrapper
                ref={descriptionElem => {
                    this.descriptionElem = descriptionElem
                }}
            >
                <AsideIconClose onClick={this.handlePressCloseIcon}>close</AsideIconClose>
                <PosterNameAlbum style={{ whiteSpace: 'nowrap' }}>{name}</PosterNameAlbum>
                <PosterArtist style={{ whiteSpace: 'nowrap' }}>{author}</PosterArtist>
                <p style={{ fontSize: '1.2rem' }}>{description}</p>
            </TestWrapper>
        )
    }
}
