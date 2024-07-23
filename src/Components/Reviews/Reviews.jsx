import './Reviews.css'
import { assets } from '../../assets/assets'
function Reviews() {


    return (
        <div className='reviews' id='reviews'>
            <h2 className='font-h2-text'>Reviews</h2>
            <div className="reviews-container" >
                <div className="reviews-left-container">
                    {assets.reviwsIcons.map((review, index) => {
                        return (index <= 3
                            ? <div className='review left' key={index}>
                                <p>{review.text}</p>
                                <img src={review.icon} alt='reviewer avatar'/>
                            </div>
                            : "")
                    })}
                </div>
                <div className="reviews-middle-container">
                    <div className="title-container">
                        <img src={assets.instaIcon} alt="instagram icon" />
                        <p>more reviews<br /> on our instagram</p>
                    </div>
                    <img src={assets.qrCode} alt="qr code" />
                    <p>@voicetaglab</p>
                </div>
                <div className="reviews-right-container">
                    {assets.reviwsIcons.map((review, index) => {
                        return (!(index <= 3)
                            ? <div className='review right' key={index}>
                                <img src={review.icon} alt='reviewer avatar' />
                                <p>{review.text}</p>
                            </div>
                            : "")
                    })}
                </div>
            </div>


        </div>
    )
}
export default Reviews