import {React, useState, useRef} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import contact from './contact.svg'
import './index.css'

export default function Contact() {

    // const [submited, setSubmit] = useState(false);
    const fnRef = useRef();
    const lnRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event)=>{
        console.log('点击提交');
        event.preventDefault();
        if (fnRef.current.value && lnRef.current.value && emailRef.current.value && phoneRef.current.value && messageRef.current.value) 
            return false
        else
            alert("Please check your inputs and fill all. ")
    }

    return (
        <div className='contact-box'>
            <Container id='contact' className='contact-container'>
                <Row>
                    <Col size={12} sm={12} md={12} lg={6} className='equal-col'>
                        <img src={contact} alt="hello" />
                    </Col>
                    <Col size={12} sm={12} md={12} lg={6} className='equal-col'>
                        <h2>Get in touch</h2>
                        <form className='contact-form' action="submit" onSubmit={handleSubmit}>
                            <Row className='align-contact'>
                                <Col size={12} sm={12} md={6}>
                                    <input ref={fnRef} type="text" placeholder='First Name'/>
                                </Col>
                                <Col size={12} sm={12} md={6}>
                                    <input ref={lnRef} type="text" placeholder='Last Name'/>
                                </Col>
                            
                                <Col size={12} sm={12} md={6}>
                                    <input ref={emailRef} type="text" placeholder='Email Address'/>
                                </Col>
                                <Col size={12} sm={12} md={6}>
                                    <input ref={phoneRef} type="text" placeholder='Phone Number'/>
                                </Col>
                            </Row>
                            <Row className='align-contact'>
                                <textarea ref={messageRef} placeholder='Message'></textarea>
                            </Row>
                            <button type='submit'>SEND</button>
                        </form>
                        
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
