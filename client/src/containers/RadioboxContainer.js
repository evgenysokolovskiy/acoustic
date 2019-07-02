import React from 'react'
import { connect } from 'react-redux'
import { changeRadioStation } from '../store/actions'
import Radiobox from '../components/Radiobox'
import { configRadioStations } from '../config/radio'

class RadioboxContainer extends React.Component {
    getRadioStation = radioStation => {
        this.props.changeRadioStation(radioStation) // Передать в store значение для radioStation
    }

    render() {
        return (
            <Radiobox
                config={configRadioStations}
                playStation={this.props.playStation}
                getRadioStation={this.getRadioStation}
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
    changeRadioStation
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RadioboxContainer)
