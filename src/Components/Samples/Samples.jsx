import './Samples.css'
import { assets } from '../../assets/assets'
import Sample from '../Sample/Sample'
function Samples() {
    
    return (
        <div className='samples' id='samples'>
            <h2 className='font-h2-text'>Tags Samples</h2>
            <div className="samples-container">
                {assets.samples.map((sample, index) => {
                    return (<Sample key={index} sample={assets.samples[index]}/>)
                })}
            </div>
        </div>
    )
}
export default Samples