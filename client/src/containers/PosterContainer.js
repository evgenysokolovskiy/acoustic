import React from 'react'
import { connect } from 'react-redux'
import { isMobilePlay, getPosterElem } from '../store/actions'
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

    // Передать через props в потомка (Scale) и вернуть значение play (состояние воспроизведения аудио из мобильной версии)
    getMobilPlay = play => {
        this.props.isMobilePlay(play)
    }

    render() {
        const { indexComposition, currentTime, album, duration } = this.props
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
                    getMobilPlay={this.getMobilPlay}
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
        headerElem: state.headerElem
    }
}

const mapDispatchToProps = {
    isMobilePlay,
    getPosterElem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PosterContainer)
