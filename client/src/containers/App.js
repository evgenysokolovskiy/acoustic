import React from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../containers/HeaderContainer'
import PosterContainer from './PosterContainer'
import PlayerContainer from './PlayerContainer'
import RadioboxContainer from '../containers/RadioboxContainer'
import Description from '../components/Description'
import { Footer } from '../components/Footer'

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <PosterContainer />
            <PlayerContainer />
            <Description />
            <RadioboxContainer />
            <Footer />
        </div>
    )
}

function mapStateToProps(store) {
    return {
        store: store
    }
}

export default connect(mapStateToProps)(App)
