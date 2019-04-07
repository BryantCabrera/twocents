import React, { Component } from 'react'
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div className="splash-container">

                <div className="splash-container__header">
                    <h1 className="splash-container__header-text">WE ARE THE PERFECT SOLUTION</h1>
                    <h4 className="splash-container__header-description">Let us be your one stop shop for networking, systems, and cloud services needs.</h4>
                </div>

                <div className="splash-container__video-box">
                    <video id="networking" style={{ width: '100%' }}
                        src="./cloud-services.mp4"
                        loop
                        autoPlay
                        muted />

                </div>

            </div>
        )
    }
}

export default Landing