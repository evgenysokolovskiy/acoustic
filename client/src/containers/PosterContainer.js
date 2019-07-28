import React from 'react'
import { connect } from 'react-redux'
import { isPlay, getPosterElem } from '../store/actions'
import PlaylistContainer from './PlaylistContainer'
import Poster from '../components/Poster'
import { ContentWrap, HomeIcon } from '../styles/screen2/'

class PosterContainer extends React.Component {
    componentDidMount() {
        this.props.getPosterElem(this.posterElem)
    }

    handlePressHomeIcon = () => {
        const elem = this.props.headerElem
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    getStatePlay = () => {
        this.props.isPlay(!this.props.play)
    }

    render() {
        const { indexComposition, currentTime, album, duration, play } = this.props
        return (
            <ContentWrap
                ref={posterElem => {
                    this.posterElem = posterElem
                }}
            >
                <Poster
                    album={album}
                    indexComposition={indexComposition}
                    currentTime={currentTime}
                    duration={duration}
                    play={play}
                    getStatePlay={this.getStatePlay}
                />
                <PlaylistContainer />
                <HomeIcon onClick={this.handlePressHomeIcon}>keyboard_arrow_up</HomeIcon>
            </ContentWrap>
        )
    }
}

const mapStateToProps = state => {
    return {
        indexComposition: state.indexComposition,
        currentTime: state.currentTime,
        album: state.album,
        duration: state.duration,
        play: state.play,
        headerElem: state.headerElem
    }
}

const mapDispatchToProps = {
    isPlay,
    getPosterElem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PosterContainer)
