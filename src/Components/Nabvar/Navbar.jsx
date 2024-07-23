import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ScreenContex } from '../../Contex/ScreenContex'
function Navbar() {

    const { handleResponsive, handleFormVisibility } = useContext(ScreenContex)


    const [dotClicked, setDotClicked] = useState(false)


    const handleDotsClick = () => {
        setDotClicked(!dotClicked)
    }



    return (
        <div className='navbar'>
            <div className="navbar-icon">
                <Link to={"/"} aria-label='logo'><img src={assets.logo} alt="logo" /></Link>
            </div>
            <div className={
                handleResponsive() === "small"
                    ? "hidden"
                    : "navbar-links"}>
                <a href={'#about_us'}>About Us</a>
                <a href={'#samples'}>Tags Samples</a>
                <a href={'#pricing'}>Pricicng</a>
                <a href={'#reviews'} className={
                    handleResponsive() === "medium"
                        ? "hidden"
                        : ""
                }>Reviews</a>
                <a href={'#faq'} className={
                    handleResponsive() === "medium"
                        ? "hidden"
                        : ""
                }>FAQ</a>
                <a href={'#feedback'} className={
                    handleResponsive() === "medium"
                        ? "hidden"
                        : ""
                }>Contacts</a>
                <div className="navbar-links-medium-screen">
                    <img src={assets.dots}
                        className={
                            handleResponsive() === "medium"
                                ? "navbar-links-dots"
                                : "hidden"}
                        onClick={handleDotsClick}
                        alt='hidden links' />
                    <div className={dotClicked
                        ? "navbar-links-medium-screen-popup"
                        : "hidden"
                    }>
                        <a href={'#reviews'}>Reviews</a>
                        <a href={'#faq'}>FAQ</a>
                        <a href={'#feedback'}>Contacts</a>
                    </div>
                </div>

            </div>

            <div className="navbar-buttons">
                <img src={assets.chat} alt="chat button" />
                <button onClick={handleFormVisibility}>Get your tag</button>
            </div>
        </div>
    )
}
export default Navbar