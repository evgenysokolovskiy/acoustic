import React from 'react'
import { connect } from 'react-redux'
import { changeIndexComposition, changeCurrentTime, isPlay, getAudioElem } from '../store/actions'
import Player from '../components/Player'

class PlayerContainer extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        this.props.changeCurrentTime(this.props.currentTime) // Передать в store значение для currentTime
    }

    // Передать через props в потомка (Scale) и вернуть значение indexComposition при событии завершения проигрываемого трека и перехода на новый
    getIndexComposition = value => {
        this.props.changeIndexComposition(value)
    }

    // Передать через props в потомка (Scale) и вернуть значение currentTime при проигрывании композиции
    getCurrentTime = value => {
        this.props.changeCurrentTime(value)
    }

    getStatePlay = () => {
        this.props.isPlay(!this.props.play)
    }

    getAudio = audioElem => {
        this.props.getAudioElem(audioElem) // Передать в store значение для indexComposition
    }

    render() {
        const { indexComposition, currentTime, album, play } = this.props
        return (
            <Player
                indexComposition={indexComposition}
                currentTime={currentTime}
                album={album}
                play={play}
                getIndexComposition={this.getIndexComposition}
                getCurrentTime={this.getCurrentTime}
                getStatePlay={this.getStatePlay}
                getAudio={this.getAudio}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        indexComposition: state.indexComposition,
        currentTime: state.currentTime,
        album: state.album,
        play: state.play
    }
}

const mapDispatchToProps = {
    changeIndexComposition,
    changeCurrentTime,
    isPlay,
    getAudioElem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerContainer)
