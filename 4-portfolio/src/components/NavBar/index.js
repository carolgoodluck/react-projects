import {React, useState} from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import {ReactComponent as Github} from './github.svg'
import {ReactComponent as LinkedIn} from './linkedin.svg'
import './index.css'


export default function NavBar() {

  const [click, setClick] = useState(false)


  return (
    <Navbar bg='dark' expand="md" sticky='top' expanded={click}>
      <Container className='nav-container'>
        <Navbar.Brand>
          <img src={require('./logo.jpeg')} alt='logo' className='nav-logo'/>&nbsp;
          <span>Carol's</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{setClick(!click)}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={()=>{setClick(!click)}}>
            <Nav.Link href='#home'>Introduction</Nav.Link>    {/** #id css选择器格式 */}
            <Nav.Link href='#tech'>Skills</Nav.Link>
            <Nav.Link className='tech-link' href='#tech'>Projects</Nav.Link>
            <Nav.Link className='github-icon' href='https://github.com/carolgoodluck/react-projects'><Github /></Nav.Link>
            <Nav.Link className='linkedin-icon' href='https://www.linkedin.com/in/carol495'><LinkedIn /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
