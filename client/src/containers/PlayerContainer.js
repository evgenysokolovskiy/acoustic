import React from 'react'
import { connect } from 'react-redux'
import { changeIndexComposition, changeCurrentTime } from '../store/actions'
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

    render() {
        const { indexComposition, currentTime, album, isMobilePlay } = this.props
        return (
            <Player
                indexComposition={indexComposition}
                currentTime={currentTime}
                album={album}
                isMobilePlay={isMobilePlay}
                getIndexComposition={this.getIndexComposition}
                getCurrentTime={this.getCurrentTime}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        indexComposition: state.indexComposition,
        currentTime: state.currentTime,
        album: state.album,
        isMobilePlay: state.playMobile
    }
}

const mapDispatchToProps = {
    changeIndexComposition,
    changeCurrentTime
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerContainer)
