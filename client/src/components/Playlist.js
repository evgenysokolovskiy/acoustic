import React from 'react'
import { PlaylistWrap } from '../styles/styled'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audio: null,
            index: 0
        }
        this.host = `http://localhost:5000/api/audio`
    }

    componentDidMount() {
        this.setState({ audio: document.getElementById('player') })
        this.props.album.list.forEach((item, i) => {
            let track = `<p>${item}</p>`
            this.playlist.innerHTML += track
        }) // Построить плейлист
    }

    componentDidUpdate(prevProps, prevState) {
        const audio = this.state.audio
        const { album, indexComposition } = this.props

        audio.src = `${this.host}/${album.name.charCodeAt(0)}/${indexComposition}.mp3`

        // Сменить альбом
        if (prevProps.album !== this.props.album) {
            this.playlist.innerHTML = ''
            this.props.album.list.forEach((item, i) => {
                let track = `<p>${item}</p>`
                this.playlist.innerHTML += track
            }) // Перестроить плейлист

            // Случай, когда при смене альбома играла композиция с индеком 1.
            if (prevProps.indexComposition === 1) this.props.getIndexComposition(0) // Индекс композиции отправить родителю (PlaylistContainer)
        }
    }

    // При нажатии в плейлисте на композицию воспроизвести её (изменить индекс)
    playComposition = e => {
        const list = this.props.album.list
        list.forEach((item, index) => {
            if (item === e.target.innerHTML) this.props.getIndexComposition(index) // Индекс композиции отправить родителю (PlaylistContainer)
        })
    }

    render() {
        return (
            <PlaylistWrap>
                <div
                    ref={playlist => {
                        this.playlist = playlist
                    }}
                    onClick={this.playComposition}
                />
            </PlaylistWrap>
        )
    }
}
