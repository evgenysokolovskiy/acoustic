import React from 'react'
import { connect } from 'react-redux'
import { isMobilePlay } from '../store/actions'
import PlaylistContainer from './PlaylistContainer'
import Poster from '../components/Poster'
//import { Texts } from '../components/Texts'
import { ContentWrap, HomeIcon } from '../styles/screen2/'

class PosterContainer extends React.Component {
    handlePressHomeIcon = () => {
        const elem = document.getElementById('header')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    // Передать через props в потомка (Scale) и вернуть значение play (состояние воспроизведения аудио из мобильной версии)
    getMobilPlay = play => {
        this.props.isMobilePlay(play)
    }

    render() {
        const { indexComposition, currentTime, album, duration } = this.props
        return (
            <ContentWrap id="poster">
                <Poster
                    album={album}
                    indexComposition={indexComposition}
                    currentTime={currentTime}
                    duration={duration}
                    getMobilPlay={this.getMobilPlay}
                />
                <PlaylistContainer />
                {/*<Texts album={album} indexComposition={indexComposition} />*/}
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
        duration: state.duration
    }
}

const mapDispatchToProps = {
    isMobilePlay
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PosterContainer)
