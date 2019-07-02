import React from 'react'
import { connect } from 'react-redux'
import { changeIndexComposition } from '../store/actions'
import Playlist from '../components/Playlist'

class PlaylistContainer extends React.Component {
    getIndexComposition = value => {
        this.props.changeIndexComposition(value) // Передать в store значение для indexComposition
    }

    render() {
        const { album, indexComposition } = this.props
        return (
            <Playlist
                indexComposition={indexComposition}
                album={album}
                getIndexComposition={this.getIndexComposition}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        indexComposition: state.indexComposition,
        album: state.album
    }
}

const mapDispatchToProps = {
    changeIndexComposition
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistContainer)
