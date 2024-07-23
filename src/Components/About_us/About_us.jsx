import './About_us.css'
import { assets } from '../../assets/assets'
import About_slide from '../About_slide/About_slide'
function About_us() {
    
    return (
        <div className='about_us' id='about_us'>
            <h2 className='font-h2-text'>About Us</h2>
            <div className="about_us-container">
                {assets.slides.map((slide, index) => {
                    return (<About_slide key={index} slide={slide} />)
                })}
            </div>
        </div>
    )
}
export default About_us