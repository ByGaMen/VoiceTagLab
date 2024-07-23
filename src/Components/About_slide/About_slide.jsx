import "./About_slide.css"
import PropTypes from 'prop-types'
function About_slide({ slide }) {

    return (
        <div className="about_slide">
            <img src={slide.img} alt="slide image" />
            <h4 className="font-large-text">{slide.title}</h4>
            <p className="font-small-text">{slide.description}</p>
        </div>
    )
}
About_slide.propTypes = {
    slide: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
}
export default About_slide