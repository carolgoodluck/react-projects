import {React, useState, useEffect} from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import headphoto from './headphoto.svg'
// import 'animate.css';
import './index.css'

export default function Introduction() {

  const [idx, setIdx] = useState(0);
  const showInfo = 'Thank you for visiting.';
  const [text, setText] = useState('');

  const [isMouseEnter, setMouseEnter] = useState(false)

  const responsive = {
    // 响应式，根据屏幕的大小，决定一次性显示几个items
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    };

  useEffect(()=>{
    const timer = setInterval(()=>{display()}, 300);
    return ()=>{clearInterval(timer)}
  }, [idx])

  const display = ()=>{
    const len = showInfo.length;
    // 表示已显示完,停留2s，重新写入过程
    if (idx === len+1){
      setIdx(0);
    }
    // 往前执行
    else{
      setText(showInfo.substring(0,idx))
      setIdx(idx+1);
    }
  }

  const handleMouse = ()=>{
    setMouseEnter(!isMouseEnter)
  }


  return (
    <div id='home' className='home'>
      <Container id='home-container'>
        <Row className='aligh-items-center'>
          <Col size={12} xs={12} md={6} className='introduction-col'>
            <div className='greeting'>
              <h1>Hi! {text}</h1>
              <br/>
              <h2>I am Yujie (Carol) Huang.</h2>
              <br />
              <p>I graduated in September this year, majoring in Msc Computer Science in University of Southampton.
                I have passion for web development. I'm currently learning React, and seeking for a position as Junior Web Developer.
                Even though I'm more familiar with web front-end, I've also learned a bit about the back-end. It is my goal to be a full stack developer in 5 years.
              </p>
              <p>
              If you are hiring and like my projects, feel free to contact me.
              </p>
              <span>
                <Nav.Link href='#contact' className='connect-btn'>
                  <button onMouseEnter={handleMouse} onMouseLeave={handleMouse}>Let's connect</button>&nbsp;&nbsp;
                  <ArrowRightCircle className='connect-arrow' size={25} style={{animationPlayState: isMouseEnter?'paused':'running'}}/>
                </Nav.Link>
              </span>
            </div>
          </Col>
          <Col size={12} xs={12} md={6} className='photo-col'>
            <h6 className='hobbies-title'>My Hobbies</h6>
            <Carousel responsive={responsive} infinite={true} centermode={true} className='person-slider'>
                    <div className='photo-box'>
                        <img className='photo-item' src={require("./travelling.jpeg")} alt="item-1" />
                        <h6>travelling</h6>
                    </div>
                    <div className='photo-box'>
                        <img className='photo-item' src={require("./eating.jpeg")} alt="item-2" />
                        <h6>eating</h6>
                    </div>
                    <div className='photo-box'>
                        <img className='photo-item' src={require("./cheers.jpeg")} alt="item-3" />
                        <h6>cheers</h6>
                    </div>
                
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}
