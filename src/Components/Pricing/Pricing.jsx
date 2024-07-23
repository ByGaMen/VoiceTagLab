import { useContext } from 'react'
import PricingCell from '../PricingCell/PricingCell'
import './Pricing.css'
import { ScreenContex } from '../../Contex/ScreenContex'
function Pricing() {
    const { handleFormVisibility } = useContext(ScreenContex)
    const pricingGrid = [
        {
            voice: 1,
            text: 'You can pick any voice'
        },
        { price: 24.90 },
        { price: 39.90 },
        { price: 49.90 },
        { price: 59.90 },
        {
            voice: 2,
            text: 'You can pick any 2 voices'
        },
        { price: 0 },
        { price: 44.90 },
        { price: 59.90 },
        { price: 69.90 },
        {
            voice: 3,
            text: 'You can pick any 3 voices'
        },
        { price: 0 },
        { price: 0 },
        { price: 64.90 },
        { price: 74.90 },
        {
            voice: 4,
            text: 'You can pick all 4 voices'
        },
        { price: 0 },
        { price: 0 },
        { price: 0 },
        { price: 79.90 },
    ]
    return (
        <div className='pricing' id='pricing'>
            <div className="pricing-grid-container">
                <h2 className='font-h2-text'>Pricing</h2>
                <p className="pricing-row-title">1 Tag</p>
                <p className="pricing-row-title">2 Tags</p>
                <p className="pricing-row-title">3 Tags</p>
                <p className="pricing-row-title">4 Tags</p>
                {pricingGrid.map((item, index) => {
                    return item.voice
                        ? <div className="pricing-collumn-title" key={index}>
                            <h4>{item.voice} {item.voice > 1 ? 'Voices' : 'Voice'}</h4>
                            <p>{item.text}</p>
                        </div>
                        : <PricingCell key={index} price={item.price} />
                })}
            </div>
            <button className='button-full' onClick={handleFormVisibility}>Get your custom tag</button>
        </div>
    )
}
export default Pricing