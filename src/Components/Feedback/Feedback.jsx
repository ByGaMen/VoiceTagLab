import './Feedback.css'
import { assets } from '../../assets/assets'
function Feedback() {

    return (
        <div className='feedback' id='feedback'>
            <h2 className='font-h2-text'>Have any question?</h2>

            <div className="feedback-container">
                <div className="feedback-left">
                    <label htmlFor="email">Email</label>
                    <div className="input-container">
                        <input type="email" id='email' placeholder='Enter your email' />
                        <img src={assets.cross} alt="close button"/>

                    </div>
                    <hr />
                    <label htmlFor="questions">Questions</label>
                    <div className="input-container">
                        <input type="text" id='questions' placeholder='Enter your questions' />
                        <img src={assets.cross} alt="close button" />
                    </div>
                    <hr />
                    <button className='button-full'>Send question</button>
                </div>
                <div className="feedback-right">
                    <img src={assets.phoneImg} alt='phone image'/>
                </div>
            </div>
        </div>
    )
}
export default Feedback