import React from 'react'
import { getSeconds } from '../helpers/'
import {
    PlayerWrap,
    ProgressBarWrap,
    PlayIconWrap,
    PlayIcon,
    Scrabber,
    Progress,
    Timeline
} from '../styles/screen2/'

export default class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = { playIcon: 'play_arrow' }
    }

    componentDidMount() {
        this.props.getAudio(this.audio)
    }

    componentDidUpdate(prevProps, prevState) {
        // Воспроизвести аудио
        this.props.play ? this.audio.play() : this.audio.pause()

        // Сменить иконку воспроизведение / пауза
        if (prevProps.play !== this.props.play) {
            this.props.play
                ? this.setState({ playIcon: 'pause' })
                : this.setState({ playIcon: 'play_arrow' })
        }

        // Заливка шкалы progress в зависимости от точки воспроизведения композиции
        this.progress.style.width =
            (this.scrubber.clientWidth / +this.audio.duration) * this.props.currentTime + 'px'

        // Вывод времени в timeline
        this.current.innerHTML =
            Math.round(Math.floor(this.props.currentTime / 60)) +
            ':' +
            getSeconds(Math.round(Math.floor(this.props.currentTime % 60)))
        this.duration.innerHTML =
            Math.round(Math.floor(this.audio.duration / 60)) +
            ':' +
            getSeconds(Math.round(Math.floor(this.audio.duration % 60)))
        if (!this.audio.duration) this.duration.innerHTML = '0:00' // Чтобы не выводился NAN при переходе между треками
    }

    // 1) Передать родителю событие клика по иконке воспроизведение / пауза
    toggleMusic = () => {
        this.props.getStatePlay(true)
    }

    // 2) Получить текущее время воспроизведения композиции и записать в Store
    getCurrent = e => {
        this.props.getCurrentTime(e.target.currentTime)
    }

    // 3) При клике по шкале перевести композицию во временную точку, соответствующую клику
    playbackScale = e => {
        const [audio, coords] = [this.audio, e.target.getBoundingClientRect()]
        const [x, width] = [coords.x, coords.width]
        const currentTime = (e.clientX - x) / (width / +audio.duration)
        audio.currentTime = currentTime
    }

    // 4) Перейти на следующий трек по достижении окончания композиции
    changeTrack = e => {
        this.props.getIndexComposition(this.props.indexComposition + 1)

        // Завершилась последняя композиция - перевести индекс в 0. Остановить проигрывание
        if (this.props.indexComposition === this.props.album.list.length - 1) {
            this.props.getIndexComposition(0)
            setTimeout(() => {
                this.props.getStatePlay(true)
                this.setState({ playIcon: 'play_arrow' })
            }, 10)
        }
    }

    render() {
        return (
            <article className="clearfix">
                <audio
                    id="player"
                    onTimeUpdate={this.getCurrent}
                    onEnded={this.changeTrack}
                    ref={audio => {
                        this.audio = audio
                    }}
                />
                <PlayerWrap>
                    <PlayIconWrap>
                        <PlayIcon onClick={this.toggleMusic}>{this.state.playIcon}</PlayIcon>
                    </PlayIconWrap>
                    <ProgressBarWrap>
                        <Scrabber
                            onClick={this.playbackScale}
                            ref={scrubber => {
                                this.scrubber = scrubber
                            }}
                        >
                            <Progress
                                ref={progress => {
                                    this.progress = progress
                                }}
                            />
                        </Scrabber>
                    </ProgressBarWrap>
                    <Timeline>
                        <span
                            ref={current => {
                                this.current = current
                            }}
                        >
                            0:00
                        </span>
                        /
                        <span
                            ref={duration => {
                                this.duration = duration
                            }}
                        >
                            0:00
                        </span>
                    </Timeline>
                </PlayerWrap>
            </article>
        )
    }
}
