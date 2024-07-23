import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
    
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-container-logo">
                    <Link to={"/"} aria-label='logo'><img src={assets.logo} alt="logo" /></Link>
                </div>
                <div className="footer-container-links">
                    <a href={'#about_us'}>About us</a>
                    <a href={'#samples'}>Tags Samples</a>
                    <a href={'#pricing'}>Pricing</a>
                    <a href={'#reviews'}>Reviews</a>
                    <a href={'#faq'}>FAQ</a>
                    <a href={'#feedback'}>Contacts</a>
                </div>
                <div className="footer-container-icons">
                    {assets.footerIcons.map((icon, index) => {
                        return <img key={index} src={icon} alt={`${icon.slice(12, -8)}  ${icon.slice(-8, -4).toLowerCase()}`}/>
                    })}
                </div>
                <div className="footer-policy-container">
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                    <p>Refund policy</p>
                </div>
            </div>

        </footer>
    )
}
export default Footer