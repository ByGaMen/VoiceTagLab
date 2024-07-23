import './Point.css'
import PropTypes from 'prop-types'
function Point({ point }) {
    return (
        <div className='point'>
            <h1 >{point.id}</h1>
            <p >{point.text}</p>            
        </div>
    )
}

Point.propTypes = {
    point: PropTypes.object,
    id: PropTypes.number,
    text: PropTypes.string
}
export default Point