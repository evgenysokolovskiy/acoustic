import React from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../containers/HeaderContainer'
import PosterContainer from './PosterContainer'
import PlayerContainer from './PlayerContainer'
import RadioboxContainer from '../containers/RadioboxContainer'
import { Footer } from '../components/Footer'

const App = () => {
    const host = `http://localhost:5000/api/video`
    const vizualize = 'vizualize'.charCodeAt(0)
    //const src = `${host}/${vizualize.charCodeAt(0)}/0.mp4`
    console.log(vizualize)
    return (
        <div>
            <HeaderContainer />
            <PosterContainer />
            <PlayerContainer />
            <RadioboxContainer />
            <Footer />

            {/*  
              <video width="1366" height="800" autoplay="autoplay" loop muted="muted" controls="controls">
                <source src='http://localhost:5000/api/video/118/0.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
              </video>
            */}
        </div>
    )
}

function mapStateToProps(store) {
    return {
        store: store
    }
}

export default connect(mapStateToProps)(App)
