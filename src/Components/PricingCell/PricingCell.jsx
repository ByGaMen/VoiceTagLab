import './PricingCell.css'
import PropTypes from 'prop-types'
function PricingCell({ price }) {


    return price === 0
        ? <div className='blank'></div>
        : <div className='pricing-cell'>
            <p>$31</p>
            <h4>${price}</h4>
        </div>
}
PricingCell.propTypes = {
    price: PropTypes.number
}
export default PricingCell