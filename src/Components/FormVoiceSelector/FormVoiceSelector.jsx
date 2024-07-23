import { useState } from 'react'
import './FormVoiceSelector.css'
import PropTypes from 'prop-types'
function FormVoiceSelector({ voice, selectedVoices, setSelectedVoices, index }) {


    const handleButtonClick = () => {

        setSelectedVoices([
            ...selectedVoices.slice(0, index),
            {
                voice: selectedVoices[index].voice,
                buttonPressed: !selectedVoices[index].buttonPressed,
                voiceCount: selectedVoices[index].voiceCount
            },
            ...selectedVoices.slice(index + 1),

        ])

    }
    const increaseVoiceCount = (e) => {
        e.stopPropagation()
        selectedVoices[index].voiceCount < 10
            ? setSelectedVoices([
                ...selectedVoices.slice(0, index),
                {
                    voice: selectedVoices[index].voice,
                    buttonPressed: selectedVoices[index].buttonPressed,
                    voiceCount: selectedVoices[index].voiceCount + 1
                },
                ...selectedVoices.slice(index + 1),
            ])
            : null
    }

    const decreaseVoiceCount = (e) => {
        e.stopPropagation()
        selectedVoices[index].voiceCount > 1
            ? setSelectedVoices([
                ...selectedVoices.slice(0, index),
                {
                    voice: selectedVoices[index].voice,
                    buttonPressed: selectedVoices[index].buttonPressed,
                    voiceCount: selectedVoices[index].voiceCount - 1
                },
                ...selectedVoices.slice(index + 1),
            ])
            : null
    }

    return (
        <>
            {selectedVoices[index].buttonPressed
                ? <div
                    className='selector green'

                >
                    <span onClick={decreaseVoiceCount}>-</span>
                    {!(selectedVoices[index].voiceCount >= 2) ? `` : ` ${selectedVoices[index].voiceCount}x`}
                    <p onClick={handleButtonClick}>{selectedVoices[index].voice}</p>
                    <span onClick={increaseVoiceCount}>+</span>
                </div>
                : <div
                    className='selector white'

                >
                    <p onClick={handleButtonClick}>{selectedVoices[index].voice}</p>
                </div>}

        </>
    )
}

FormVoiceSelector.propTypes = {
    voice: PropTypes.string,
    buttonsPressedVoice: PropTypes.bool,
    setButtonsPressedVoice: PropTypes.func,
    voiceCount: PropTypes.number,
    setVoiceCount: PropTypes.func,
    selectedVoices: PropTypes.array,
    setSelectedVoices: PropTypes.func,
    index: PropTypes.number
}

export default FormVoiceSelector