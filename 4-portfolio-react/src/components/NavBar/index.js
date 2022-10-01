import {React, useState} from 'react'
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import logo from './logo_new.svg'
import './index.css'

export default function NavBar() {

  // const [expand, setExpand] = useState(false);
  
  return (
    <Navbar expand="md" sticky='top'>
      <Container className='nav-container'>
        <Navbar.Brand>
          <img src={logo} alt='logo' className='nav-logo'/>&nbsp;
          Carol's
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='#home'>Introduction</Nav.Link>    {/** #id css选择器格式 */}
            <Nav.Link href='#tech'>Skills</Nav.Link>
            <Nav.Link href='#tech'>Projects</Nav.Link>
          </Nav>

        <Button href='#contact' className='navbar-connect-btn'>Let's connect</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
