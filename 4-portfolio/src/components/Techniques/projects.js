import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export function Project1() {
  return (
    <div>
    <Container className='project-item-container'>
        <Row>
            <Col size={12} xs={10} md={7} lg={7}>
                <h5>Task Management</h5>
                <img src={require("./1.jpg")} alt="img" />
            </Col>
            <Col size={12} xs={10} md={5} lg={5}>
                <p>
                The to-do-list is used for manage daily tasks. 
                <br />
                Adding a new task, removing existing ones, changing task status and etc.
                </p>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export function Project2() {
    return (
        <div>
        <Container className='project-item-container'>
            <Row>
                <Col size={10} xs={10} md={7} lg={7}>
                    <h5>Search App</h5>
                    <img src={require("./2.jpg")} alt="img" />
                </Col>
                <Col size={10} xs={10} md={5} lg={5}>
                    <p>
                    This app is can be used to find relevant GitHub users through input keywords.
                    <br />
                    Main technology used for the app: Axios, PubSub
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export function Project3() {
    return (
        <div>
        <Container className='project-item-container'>
            <Row>
                <Col size={10} xs={10} md={7} lg={7}>
                    <h5>Calculator</h5>
                    <img id='calculator-img' src={require("./3.png")} alt="img"/>
                </Col>
                <Col size={10} xs={10} md={5} lg={5}>
                    <p>
                    This is calculator web app.
                    <br />
                    Used Hooks: useState, useReducer
                    <br />
                    <br />
                    It realizes the basic calculations, and store the shared state in reducer. Many details are taken into consideration, such as use the lasted operation symbol when continuously clicking different ones.
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

