import { useContext } from "react"
import "./Hero.css"
import { ScreenContex } from "../../Contex/ScreenContex"
function Hero() {
    const { handleFormVisibility } = useContext(ScreenContex)
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="font-hero-text">Voice <br />Tag Lab</h1>
                <h3 className="font-h3-text">The best custom voice tags online</h3>
                <p>Voice Tag is a necessity for every music producer.</p>
                <p>We offer a wide range of voices and professional service.</p>
                <p>Brand your sound with us! Become known</p>
                <button className="button-full" onClick={handleFormVisibility}>Get your custom tag</button>
            </div>
        </div>
    )
}
export default Hero