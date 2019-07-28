import React from 'react'
import {
    DescriptionWrapper,
    DescriptionIconClose,
    DescriptionNameAlbum,
    DescriptionArtist,
    DescriptionText
} from '../styles/screen1/description'

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
            <DescriptionWrapper
                ref={descriptionElem => {
                    this.descriptionElem = descriptionElem
                }}
            >
                <DescriptionIconClose onClick={this.handlePressCloseIcon}>
                    close
                </DescriptionIconClose>
                <DescriptionNameAlbum style={{ whiteSpace: 'nowrap' }}>{name}</DescriptionNameAlbum>
                <DescriptionArtist style={{ whiteSpace: 'nowrap' }}>{author}</DescriptionArtist>
                <DescriptionText>{description}</DescriptionText>
            </DescriptionWrapper>
        )
    }
}
