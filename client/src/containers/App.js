import React from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../containers/HeaderContainer'
import PosterContainer from './PosterContainer'
import PlayerContainer from './PlayerContainer'
import RadioboxContainer from '../containers/RadioboxContainer'
import { Footer } from '../components/Footer'

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <PosterContainer />
            <PlayerContainer />
            {/*<RadioboxContainer />*/}
            {/*<Footer />*/}
        </div>
    )
}

function mapStateToProps(store) {
    return {
        store: store
    }
}

export default connect(mapStateToProps)(App)
