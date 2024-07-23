import './Sample.css'
import PropTypes from 'prop-types'
function Sample({ sample }) {

    return (
        <div className='sample'>

            <div style={{ backgroundImage: `url(${sample.img})` }} className='sample-container'>
                <p className='font-large-text'>{sample.title}</p>
                {sample.music.map((item, index) => {
                    return (
                        <div
                            className="sample-container-music"
                            key={index}>
                            <img src={sample.button[index]} alt="pause/play button" />
                            <img src={item} alt="music sample"/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
Sample.propTypes = {
    sample: PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        button: PropTypes.arrayOf(PropTypes.string),
        music: PropTypes.arrayOf(PropTypes.string)
    })
}
export default Sample