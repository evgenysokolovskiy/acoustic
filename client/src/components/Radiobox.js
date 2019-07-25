import React from 'react'
import {
    RadioboxWrap,
    RadioboxPlayer,
    RadioboxPoster,
    RadioboxButtons,
    RadioboxPrevElem,
    RadioboxPlayElem,
    RadioboxNextElem,
    RadioboxWrapText,
    RadioboxTitle,
    RadioboxTitleText
} from '../styles/screen4/'

export default class Radiobox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { play: false, icon_play: 'play_circle_filled' }
    }

    componentDidMount() {
        this.props.getRadioStation('seattleWaveRadio')
        this.props.getRadioboxElem(this.radioboxElem)
    }

    componentDidUpdate(prevProps, prevState) {
        // При состоянии play === true воспроизводить
        this.state.play ? this.audio.play() : this.audio.pause()
    }

    // Воспроизведение / пауза
    toggleMusic = () => {
        this.state.icon_play === 'play_circle_filled'
            ? this.setState({ icon_play: 'pause_circle_filled', play: true })
            : this.setState({ icon_play: 'play_circle_filled', play: false })
    }

    // Предыдущая в списке радиостанция
    prevRadioStation = () => {
        const { playStation } = this.props
        const stations = Object.keys(this.props.config)
        let station
        for (let i = 0; i < stations.length; i++) {
            if (playStation === stations[i]) {
                station = stations[--i]
                break
            }
        }
        if (!station) station = stations[stations.length - 1]
        this.props.getRadioStation(station)
    }

    // Следующая в списке радиостанция
    nextRadioStation = () => {
        const { playStation } = this.props
        const stations = Object.keys(this.props.config)
        let station
        for (let i = 0; i < stations.length; i++) {
            if (playStation === stations[i]) {
                station = stations[++i]
                break
            }
        }
        if (!station) station = stations[0]
        this.props.getRadioStation(station)
    }

    render() {
        let src, poster
        if (this.props.config[this.props.playStation]) {
            src = this.props.config[this.props.playStation].src
            poster = this.props.config[this.props.playStation].poster
        }
        return (
            <RadioboxWrap
                ref={radioboxElem => {
                    this.radioboxElem = radioboxElem
                }}
            >
                <audio
                    src={src}
                    ref={audio => {
                        this.audio = audio
                    }}
                />
                <RadioboxPlayer>
                    <RadioboxPoster style={{ background: `url(${poster}) 100% 100% no-repeat` }} />
                    <RadioboxButtons>
                        <RadioboxPrevElem onClick={this.prevRadioStation}>
                            skip_previous
                        </RadioboxPrevElem>
                        <RadioboxPlayElem onClick={this.toggleMusic}>
                            {this.state.icon_play}
                        </RadioboxPlayElem>
                        <RadioboxNextElem onClick={this.nextRadioStation}>
                            skip_next
                        </RadioboxNextElem>
                    </RadioboxButtons>
                </RadioboxPlayer>
                <RadioboxWrapText>
                    <RadioboxTitle>seattle wave radio</RadioboxTitle>
                    <RadioboxTitleText>genre: 'acoustic'</RadioboxTitleText>
                </RadioboxWrapText>
            </RadioboxWrap>
        )
    }
}
