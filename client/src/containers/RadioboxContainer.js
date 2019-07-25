import React from 'react'
import { connect } from 'react-redux'
import { changeRadioStation, getRadioboxElem } from '../store/actions'
import Radiobox from '../components/Radiobox'
import { configRadioStations } from '../config/radio'

class RadioboxContainer extends React.Component {
    // Радиостанция
    getRadioStation = radioStation => {
        this.props.changeRadioStation(radioStation) // Передать в store значение для radioStation
    }

    // Радиобокс элемент
    getRadioboxElem = radioboxElem => {
        this.props.getRadioboxElem(radioboxElem)
    }

    render() {
        return (
            <Radiobox
                config={configRadioStations}
                playStation={this.props.playStation}
                getRadioStation={this.getRadioStation}
                getRadioboxElem={this.getRadioboxElem}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        playStation: state.playStation
    }
}

const mapDispatchToProps = {
    changeRadioStation,
    getRadioboxElem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RadioboxContainer)
