import React from 'react'
import { connect } from 'react-redux'
import {
    changeAlbum,
    changeIndexComposition,
    isPlay,
    getMetadataFromServer,
    getHeaderElem
} from '../store/actions/'
import { configAlbum } from '../config/'
import Header from '../components/Header'

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { names: [] }
    }

    componentDidMount() {
        // Получить и записать в state names наименования альбомов из configAlbum. Очередность соответствует порядку расположения в configAlbum
        let names = []
        Object.keys(configAlbum).forEach(item => {
            names.push(configAlbum[item].name)
        })
        this.setState({ names })
        this.props.changeIndexComposition(0, names[0]) // При загрузке страницы indexComposition = 0
        this.props.getMetadataFromServer(names[0]) // Отправить наименование дефолтного альбома на сервер и вернуть duration его композиций
    }

    getAlbum = nameAlbum => {
        let config
        Object.keys(configAlbum).forEach(item => {
            if (item === nameAlbum) {
                config = configAlbum[item]
            }
        })

        // Записать в хранилище store данные о выбранном альбоме
        this.props.changeAlbum({
            name: config.name,
            list: config.list,
            poster: config.poster,
            photographer: config.photographer,
            author: config.author,
            year: config.year,
            description: config.description
        })

        this.props.changeIndexComposition(0, config.name)
        this.props.getMetadataFromServer(config.name) // Отправить наименование выбранного альбома на сервер и вернуть duration его композиций
    }

    getHeader = headerElem => {
        this.props.getHeaderElem(headerElem) // Передать в store значение для indexComposition
    }

    getStatePlay = () => {
        this.props.isPlay(!this.props.play)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <Header
                    names={this.state.names}
                    target={this.props.album.name}
                    album={this.props.album}
                    indexComposition={this.props.indexComposition}
                    play={this.props.play}
                    radioboxElem={this.props.radioboxElem}
                    posterElem={this.props.posterElem}
                    // Получить ответ
                    getAlbum={this.getAlbum}
                    getHeader={this.getHeader}
                    getStatePlay={this.getStatePlay}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        indexComposition: state.indexComposition,
        album: state.album,
        play: state.play,
        radioboxElem: state.radioboxElem,
        posterElem: state.posterElem
    }
}

const mapDispatchToProps = {
    changeAlbum,
    changeIndexComposition,
    isPlay,
    getMetadataFromServer,
    getHeaderElem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)
