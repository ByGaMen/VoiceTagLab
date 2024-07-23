import { createContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
export const ScreenContex = createContext(null)


const ScreenContexProvider = (props) => {
    const [screenSize, setScreenSize] = useState(window.window.innerWidth)
    const [formVisibility, setFormVisibility] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => setScreenSize(window.innerWidth))


        return () => window.removeEventListener('resize', () => screenSize(window.innerWidth))
    }, [screenSize])

    const handleFormVisibility = () => {
        
        if (formVisibility === false && screenSize < 600) {
            
            document.body.style.overflowY = "hidden"
        }
        else if (formVisibility === true ) {
            document.body.style.overflowY = "auto"
        }
        setFormVisibility(!formVisibility)
    }

    const handleResponsive = () => {
        if (screenSize > 1100) {
            return "large"
        }
        else if (screenSize > 900 && screenSize < 1100) {
            return "medium"
        }
        return "small"
    }
    const contextValue = {
        screenSize,
        setScreenSize,
        handleResponsive,
        formVisibility,
        handleFormVisibility,

    }
    return (
        <ScreenContex.Provider value={contextValue}>
            {props.children}
        </ScreenContex.Provider>
    )
}

ScreenContexProvider.propTypes = {
    children: PropTypes.object
}
export default ScreenContexProvider