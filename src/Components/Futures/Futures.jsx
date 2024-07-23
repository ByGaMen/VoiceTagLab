import './Futures.css'
import { assets } from '../../assets/assets'
import { useState, useEffect, useRef, useContext } from 'react'
import { ScreenContex } from '../../Contex/ScreenContex'

function Futures() {
    const { handleFormVisibility } = useContext(ScreenContex)

    return (
        <div className='futures'>
            <div className="futures-container" >
                <h3 className='font-h3-text'>Futures</h3>
                <div className="futures-container-points">
                    <div className="futures-container-point">
                        <img src={assets.dot} alt='list point' />
                        <div className="futures-container-point-wrapper">
                            <h4>Multiple recordings</h4>
                            <p>We record each day at least 3 times so you can choose the best one
                            </p>
                        </div>
                    </div>
                    <div className="futures-container-point">
                        <img src={assets.dot} alt='list point' />
                        <div className="futures-container-point-wrapper">

                            <h4>HQ WAV files</h4>
                            <p>You will receive your voice tag(s) in the highest quality. WAV format 24 Bit</p>
                        </div>

                    </div>
                    <div className="futures-container-point">
                        <img src={assets.dot} alt='list point' />
                        <div className="futures-container-point-wrapper">

                            <h4>FX + Mixed + Dry</h4>
                            <p>We send 3 variations of each voice tag: with sound FX, basic mixing, and the dry recording</p>
                        </div>

                    </div>
                    <div className="futures-container-point">
                        <img src={assets.dot} alt='list point' />
                        <div className="futures-container-point-wrapper">

                            <h4>Fully Custom</h4>
                            <p>You can request any effects, style and all you want!</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offer-container">
                <h3 className='font-h3-text'>Ultimate Offer For Music Producers</h3>
                <div className="offer-container-point">
                    <img src={assets.dot} alt='list point' />
                    <p>Ultimate Offer For Music Producers </p>
                </div>
                <div className="offer-container-point">
                    <img src={assets.dot} alt='list point' />
                    <p>Custom Voice Tag + 10GB of drum, loop and midi kits</p>
                </div>
                <button className='font-large-text' onClick={handleFormVisibility}>I want it</button>
            </div>
        </div>
    )
}
export default Futures