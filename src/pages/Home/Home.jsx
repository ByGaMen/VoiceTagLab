
import About_us from '../../Components/About_us/About_us'
import BackToTop from '../../Components/BackToTop/BackToTop'
import Description from '../../Components/Description/Description'
import FAQ from '../../Components/FAQ/FAQ'
import Feedback from '../../Components/Feedback/Feedback'
import Footer from '../../Components/Footer/Footer'
import Futures from '../../Components/Futures/Futures'
import Hero from '../../Components/Hero/Hero'
import Pricing from '../../Components/Pricing/Pricing'
import Reviews from '../../Components/Reviews/Reviews'
import Samples from '../../Components/Samples/Samples'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <Hero />
            <Description />
            <About_us />
            <Samples />
            <Futures />
            <Pricing />
            <Reviews />
            <FAQ/>
            <Feedback/>
            <Footer/>
            <BackToTop/>
        </div>
    )
}
export default Home