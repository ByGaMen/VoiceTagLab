import './FAQ.css'
import { assets } from '../../assets/assets'

function Faq() {
    const questions = [
        {
            question: 'When will I receive my tags?',
            answer: 'Please allow up to 4 days for your custom tag.'
        },
        {
            question: 'How do you know how to pronounce my name correctly?',
            answer: `We will contact you after you place your order. Or you can enter the pronunciation in the <span class='grey'>«Your requests»</span> field in the order form.`
        },
        {
            question: 'Can I use my voice tag for commercial projects?',
            answer: 'Yes, you have the full right to use it. Brand yourself! Become known!'
        },
        {
            question: 'In what format will I receive my tag?',
            answer: 'All tags are sent in HIGH QUALITY WAV format. We make at least 3 recordings, each with sound FX, basic mix and the dry recording.'
        },
        {
            question: 'What are voice actor options?',
            answer: `Choose from 4 different voice options: female, male, kids and anime voice. If you require more than one brand tags, we got some package deals for you. Check the <span class='grey'>«Prices» </span> section for more info!`
        },
        {
            question: 'Can you make a vocal script?',
            answer: `Of course! Need a voiceover for your instructional video or a narrator for your commercial, film, or book reading? Email <span class='blue'> mail@voicetaglab.com </span> to get your price quote!`
        },
        {
            question: 'What should I include in the «Your requests» section?',
            answer: 'This is where you share a bit about how you want your voice tag to sound. This might include the style that best reflects your brand, or your desired special effects.'
        },
        {
            question: 'Can I hear a tag before I pay?',
            answer: `No, we don't get started until your order is processed, but each tag is recorded several times and you get every recording - 3 to 5 in total! And we offer 2 free revisions if you aren’t satisfied. We deliver results!`
        },
        {
            question: 'What is a revision?',
            answer: `A revision is a change to your tag. If you aren’t satisfied with the first version of your tag, we can revise it 2 times.`,
            answerList1: {
                listTitle: 'The revisions include changes to:',
                listPoints: ['Effects', 'Tone', 'Speed']
            },
            answerList2: {
                listTitle: `Revisions don’t include:`,
                listPoints: ['Changes to the phrase wording. The phrase cannot be changed once the first version of the drop has been sent.', `Changes to the voice actor. We can't change the person who works with your tag.`]
            }
        },
        {
            question: 'How long can a tag be?',
            answer: `A tag can only be one phrase of 7 words or less. Multiple phrases won't be accepted, but we offer some special pricing packages for multiple voice tags. If your tag is longer than 7 words, it is considered as 2 tags.`
        },
        {
            question: 'Can I edit the phrase after purchase?',
            answer: `Yes, but you got only 8 hours after your order is confirmed.`
        },
        {
            question: `I don't have a tag phrase yet. Can I still order?`,
            answer: `Yes, just include your producer name and we will contact you help to figure out what you need.`
        },
        {
            question: 'Can you just add some effects for my own recording?',
            answer: `Yes, email us at <span class='blue'> mail@voicetaglab.com </span> and we will discuss it.`
        },
    ]

    return (
        <div className='faq' id='faq'>
            <h2 className='font-h2-text'>FAQ</h2>
            <div className="faq-container">
                {questions.map((question, index) => {
                    return (
                        <div className='faq-question' key={index}>
                            {question.answerList1
                                ? <>
                                    <h4 className='font-large-text'>{question.question}</h4>
                                    <p>{question.answer}</p>
                                    <p>{question.answerList1.listTitle}</p>
                                    <ul>
                                        {question.answerList1.listPoints.map((point, index) => {
                                            return <li key={index} className='faq-point'>
                                                <img src={assets.blueDot} alt='list point'/>
                                                <p key={index}>{point}</p>
                                            </li>
                                        })}
                                    </ul>
                                    <p>{question.answerList2.listTitle}</p>
                                    <ul>
                                        {question.answerList2.listPoints.map((point, index) => {
                                            return <li key={index} className='faq-point'>
                                                <img src={assets.redDot} alt='list point' />
                                                <p key={index}>{point}</p>
                                            </li>
                                        })}
                                    </ul>
                                </>
                                : <>
                                    <h4 className='font-large-text'>{question.question}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: question.answer }}></p>
                                </>}
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
export default Faq