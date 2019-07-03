import React from 'react'
import { getSeconds } from '../helpers/'
import {
    PosterWrap,
    PosterNameAlbum,
    PosterArtist,
    PosterImageWrap,
    PosterImage,
    PlayMobile,
    PosterMetadata,
    ScrabberPoster,
    ProgressPoster
} from '../styles/screen2/'

export default class Poster extends React.Component {
    constructor(props) {
        super(props)
        // Стейты используются для управления состоянием воспроизведения аудио в мобильной версии сайта
        this.state = { play: false, icon_play: 'play_arrow' }
    }

    componentDidUpdate(prevState) {
        // Контроль управления воспроизведением аудио в мобильной версии
        // Записать в Store состояние (true/false)
        if (prevState.play !== this.state.play) {
            this.props.getMobilPlay(this.state.play)
        }
    }
    // 1) Воспроизведение / пауза
    toggleMusic = () => {
        this.state.icon_play === 'play_arrow'
            ? this.setState({ icon_play: 'pause', play: true })
            : this.setState({ icon_play: 'play_arrow', play: false })
    }

    render() {
        const { indexComposition, currentTime } = this.props
        const arrDurationsSongsInMilliseconds = this.props.duration // Массив с продолжительностью песен
        const durationAlbumInMilliseconds = arrDurationsSongsInMilliseconds.reduce(
            (sum, b) => +sum + +b,
            0
        ) // Продолжительность альбома в миллисекундах
        // Форма вывода времени
        const durationAlbum =
            Math.round(Math.floor(durationAlbumInMilliseconds / 60)) +
            ':' +
            getSeconds(Math.round(Math.floor(durationAlbumInMilliseconds % 60)))
        // Время альбома до текущей композиции в миллисекундах
        // currentTime - Текущая отметка проигрывания в текущей композиции
        const sumBefore = arrDurationsSongsInMilliseconds.reduceRight((sum, b, i) => {
            if (i > indexComposition - 1) {
                return +sum
            }
            return +sum + +b
        }, 0)
        // Текущая отметка времени относительно всего альбома в миллисекундах
        const current = +sumBefore + +currentTime
        // Заливка шкалы progress в зависимости от точки воспроизведения композиции
        if (this.progress)
            this.progress.style.width =
                (+this.scrubber.clientWidth / +durationAlbumInMilliseconds) * +current + 'px'

        return (
            <PosterWrap>
                <PosterNameAlbum>{this.props.album.name}</PosterNameAlbum>
                <PosterArtist>{this.props.album.author}</PosterArtist>
                <PosterImageWrap>
                    <PosterImage src={this.props.album.poster} />
                    <PlayMobile onClick={this.toggleMusic}>{this.state.icon_play}</PlayMobile>
                </PosterImageWrap>

                <ScrabberPoster
                    onClick={this.playbackScale}
                    ref={scrubber => {
                        this.scrubber = scrubber
                    }}
                >
                    <ProgressPoster
                        ref={progress => {
                            this.progress = progress
                        }}
                    />
                </ScrabberPoster>

                <PosterMetadata>Duration: {durationAlbum}</PosterMetadata>
                <PosterMetadata>Year: {this.props.album.year}</PosterMetadata>
            </PosterWrap>
        )
    }
}
