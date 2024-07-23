import { useState } from 'react'
import './Description.css'
import Point from '../Point/Point.jsx'
function Description() {

    const [points, setPoints] = useState({
        firstPoint: {
            id: 1,
            text: "Listen to the audio samples and choose which voice(s) you want"
        },
        secondPoint: {
            id: 2,
            text: `Choose your package in the "Prices" section and click on the "Get your custom tag" button`
        },
        thirdPoint: {
            id: 3,
            text: "Fill out the form. Include your tag phrase(s), any requests like mood, effects, etc."
        }
    })

    return (
        <div className='description'>
            <h2 className='font-h2-text'>How it works?</h2>
            <div className="descriptions-container">
                <div className="description-container-points">
                    <Point point={points.firstPoint} />
                    <Point point={points.secondPoint} />
                    <Point point={points.thirdPoint} />
                </div>
                <div className="descriptions-container-caution">
                    <span>!</span>
                    <p>Don’t’ worry about the pronunciation of your name. <br /> We will contact you to clarify it.</p>
                    <span>!</span>
                </div>

            </div>
        </div>
    )
}
export default Description