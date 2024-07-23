import './BackToTop.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
function BackToTop() {
    const goToTop  = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <img src={assets.arrowUp} className='back-to-top' onClick={goToTop} alt='back to top of the site'/>
    )
}
export default BackToTop