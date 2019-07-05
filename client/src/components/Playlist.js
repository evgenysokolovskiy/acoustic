import React from 'react'
import { PlaylistWrap, PlaylistItem, PlaylistItemPress } from '../styles/screen2/'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audio: null
        }
        this.host = `http://localhost:5000/api/audio`
    }

    componentDidMount() {
        this.setState({ audio: document.getElementById('player') })
    }

    componentDidUpdate(prevProps, prevState) {
        const audio = this.state.audio
        const { album, indexComposition } = this.props

        audio.src = `${this.host}/${album.name.charCodeAt(0)}/${indexComposition}.mp3`
    }

    // При нажатии в плейлисте на композицию воспроизвести её (изменить индекс)
    playComposition = e => {
        const list = this.props.album.list
        list.forEach((item, index) => {
            if (item === e.target.innerHTML) this.props.getIndexComposition(index) // Индекс композиции отправить родителю (PlaylistContainer)
        })
    }

    render() {
        let playlist = this.props.album.list.map((item, i) => (
            <PlaylistItem key={i} id={item} onClick={this.playComposition}>
                {i !== this.props.indexComposition ? (
                    item
                ) : (
                    <PlaylistItemPress>{item}</PlaylistItemPress>
                )}
            </PlaylistItem>
        ))

        return <PlaylistWrap>{playlist}</PlaylistWrap>
    }
}
