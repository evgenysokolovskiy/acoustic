import React from 'react'
import { connect } from 'react-redux'
import { isMobilePlay } from '../store/actions'
import PlaylistContainer from './PlaylistContainer'
import Poster from '../components/Poster'
//import { Texts } from '../components/Texts'
import { ContentWrap } from '../styles/styled'

class PosterContainer extends React.Component {
    // Передать через props в потомка (Scale) и вернуть значение play (состояние воспроизведения аудио из мобильной версии)
    getMobilPlay = play => {
        this.props.isMobilePlay(play)
    }

    render() {
        const { indexComposition, currentTime, album, duration } = this.props
        return (
            <ContentWrap>
                <Poster
                    album={album}
                    indexComposition={indexComposition}
                    currentTime={currentTime}
                    duration={duration}
                    getMobilPlay={this.getMobilPlay}
                />
                <PlaylistContainer />
                {/*<Texts album={album} indexComposition={indexComposition} />*/}
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
