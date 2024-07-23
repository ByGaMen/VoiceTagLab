import './Form.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { ScreenContex } from '../../Contex/ScreenContex'
import FormVoiceSelector from '../FormVoiceSelector/FormVoiceSelector'
import FormWarning from '../FormWarding/FormWarning'

function Form() {
    const { handleFormVisibility } = useContext(ScreenContex)
    const [selectedTags, setSelectedTags] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false
    })
    const [selectedVoices, setSelectedVoices] = useState([
        {
            voice: 'Male',
            buttonPressed: false,
            voiceCount: 1
        },
        {
            voice: 'Female',
            buttonPressed: false,
            voiceCount: 1
        },
        {
            voice: 'Anime',
            buttonPressed: false,
            voiceCount: 1
        },
        {
            voice: 'Kid',
            buttonPressed: false,
            voiceCount: 1
        },
    ])
    const [tagPhrase, setTagPhrase] = useState('')
    const [requestForVoice, setRequestForVoice] = useState('')
    const [emailForm, setEmailForm] = useState('')
    const [promocodeForm, setPromocodeForm] = useState('')
    const [radioValue, setRadioValue] = useState('PayPal')
    const [formWarning, setFormWarning] = useState(false)

    const handleRadioValueChange = (event) => {
        setRadioValue(event.target.value)
    }

    const handleButtonPress = (number) => {
        const desiredButton = `button${number}`
        setSelectedTags({
            button1: false,
            button2: false,
            button3: false,
            button4: false,
            [desiredButton]: !selectedTags[desiredButton]
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(selectedTags).filter(key => selectedTags[key] === true).length === 0 ||
            selectedVoices.filter(voice => voice.buttonPressed === true).length === 0 ||
            tagPhrase === '' ||
            emailForm === '') {

            setFormWarning(true)
        } else {

            console.log('Form submitted')
            console.log(`Selected tags: ${Object.keys(selectedTags).filter(key => selectedTags[key] === true)}`)
            console.log(`Selected voices: ${selectedVoices.filter(voice => voice.buttonPressed === true).map(voice => {
                return `x${voice.voiceCount} ${voice.voice}`
            })
                }`)
            console.log(`Tag info: ${tagPhrase}`)
            console.log(`Request for voice: ${requestForVoice}`)
            console.log(`Email: ${emailForm}`)
            console.log(`Paying method: ${radioValue}`)
            console.log(`Promocode: ${promocodeForm}`
            )
            handleFormVisibility()
        }
    }


    return (
        <form className="form">
            <div className='form-container'>
                <h3 >Fill out the form</h3>
                <img src={assets.formCross} alt="close button" onClick={handleFormVisibility} />
                <div className={`form-tags ${Object.keys(selectedTags).filter(key => selectedTags[key] === true).length === 0 && formWarning ? 'warning' : ''}`}>
                    <h5>How many tags do you need?</h5>
                    <div className="form-tags-container">
                        <input
                            className={!selectedTags.button1 ? "form-tag white" : "form-tag black"}
                            type='button'
                            value={'1 Voice tag'}
                            placeholder='1 Voice tag'
                            onClick={() => handleButtonPress(1)} />
                        <input
                            className={!selectedTags.button2 ? "form-tag white" : "form-tag black"}
                            type='button'
                            value={'2 Voices tag'}
                            placeholder='2 Voices tag'
                            onClick={() => handleButtonPress(2)} />
                        <input
                            className={!selectedTags.button3 ? "form-tag white" : "form-tag black"}
                            type='button'
                            value={'3 Voices tag'}
                            placeholder='3 Voices tag'
                            onClick={() => handleButtonPress(3)} />
                        <input
                            className={!selectedTags.button4 ? "form-tag white" : "form-tag black"}
                            type='button'
                            value={'4 Voices tag'}
                            placeholder='4 Voices tag'
                            onClick={() => handleButtonPress(4)} />
                    </div>
                </div>
                <div className={`form-voices ${selectedVoices.filter(voice => voice.buttonPressed === true).length === 0 && formWarning ? 'warning' : ''}`}>
                    <h5>*Which voice(s) you prefer?</h5>
                    <div className="form-voices-container">
                        {selectedVoices.map((voice, index) => {
                            return <FormVoiceSelector
                                key={index}
                                voice={selectedVoices[index].voice}
                                index={index}
                                selectedVoices={selectedVoices}
                                setSelectedVoices={setSelectedVoices}
                            />
                        })}
                    </div>
                </div>
                <div className="form-inputs">
                    <div className={`tag-description ${tagPhrase === '' && formWarning ? 'warning' : ''}`}>
                        <h5>*What you want to be said?</h5>
                        <div className="form-input-container">
                            <input
                                type="text"
                                placeholder='Enter your tag phrase(s)'
                                value={tagPhrase}
                                onChange={(e) => setTagPhrase(e.target.value)}
                            />
                            <img src={assets.formCrossInput} alt='close button for input' onClick={() => setTagPhrase('')}/>
                        </div>
                        <hr />
                    </div>
                    <div className="request">
                        <h5>Your request</h5>
                        <div className="form-input-container">
                            <input
                                type="text"
                                placeholder='Any details like mood, effects, etc. (Optional)'
                                value={requestForVoice}
                                onChange={(e) => setRequestForVoice(e.target.value)}
                            />
                            <img src={assets.formCrossInput} alt='close button for input' onClick={() => setRequestForVoice('')} />
                        </div>
                        <hr />
                    </div>
                    <div className={`tag-description ${emailForm === '' && formWarning ? 'warning' : ''}`}>
                        <h5>*Your Email</h5>
                        <div className="form-input-container">
                            <input
                                type="email"
                                placeholder='Enter your email to receive tags'
                                value={emailForm}
                                onChange={(e) => setEmailForm(e.target.value)}
                            />
                            <img src={assets.formCrossInput} alt='close button for input' onClick={() => setEmailForm('')} />
                        </div>
                        <hr />
                    </div>
                    <div className="payment">
                        <h5>Payment method</h5>
                        <div className="payment-container">
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='PayPal'
                                    checked={radioValue === 'PayPal' ? true : false}
                                    onChange={handleRadioValueChange} />
                                <p>PayPal</p>
                                <img src={assets.formLogos.PayPal} alt='PayPal'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='Card'
                                    checked={radioValue === 'Card' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>Card</p>
                                <img src={assets.formLogos.Visa} alt='Visa'/>
                                <img src={assets.formLogos.MasterCard} alt='MasterCard'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='Steam'
                                    checked={radioValue === 'Steam' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>Steam items</p>
                                <img src={assets.formLogos.Steam} alt='Steam'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='Crypto'
                                    checked={radioValue === 'Crypto' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>Crypto</p>
                                <img src={assets.formLogos.Crypto} alt='Crypto'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='YooMoney'
                                    checked={radioValue === 'YooMoney' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>YooMoney</p>
                                <img src={assets.formLogos.YooMoney} alt='YooMoney'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='PerfectMoney'
                                    checked={radioValue === 'PerfectMoney' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>Perfect Money</p>
                                <img src={assets.formLogos.PerfectMoney} alt='PerfectMoney'/>
                            </div>
                            <div className="payment-method">
                                <input
                                    type="radio"
                                    value='Payeer'
                                    checked={radioValue === 'Payeer' ? true : false}
                                    onChange={handleRadioValueChange}
                                />
                                <p>Payeer</p>
                                <img src={assets.formLogos.Payeer} alt='Payeer'/>
                            </div>
                        </div>
                    </div>
                    <div className="promocode">
                        <h5>Got promo code?</h5>
                        <div className="form-input-container">
                            <input
                                type="text"
                                placeholder='Optional'
                                value={promocodeForm}
                                onChange={(e) => setPromocodeForm(e.target.value)}
                            />
                            <img src={assets.formCrossInput} alt='close button for input' onClick={() => setPromocodeForm('')} />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="price">
                    <h6>Price</h6>
                    <div className="price-container">
                        <div className="price-container-left">
                            <h2>$19</h2>
                            <h4>90</h4>
                            <p>$31</p>
                        </div>
                        <button
                            className='button-full'
                            onClick={handleFormSubmit}
                            type='submit'
                        >Get your custom tag</button>
                    </div>
                </div>
                {
                    formWarning
                        ? <FormWarning />
                        : null
                }
            </div>
        </form>
    )
}
export default Form