import React from 'react'
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap'
import { Project1, Project2, Project3 } from './projects';
import './index.css'

const projects = [
  {id:1, title:'Project1',},
  {id:2, title:'Project2'},
  {id:3, title:'Project3'}
];

export default function Techniques() {
  return (
    <div className='tech-box' id='tech'>
    <Container className='tech-container'>
        <Row className='tech-row'>
            <Col size={12} xs={12} md={12} lg={4} className='skill-col'>
                <h2>Skills</h2>
                <img src={require('./react.canva.webp')} alt="skill-1" />
                <span>React</span>
                <img className='pic' src={require('./js.canva.webp')} alt='skill-2'/>
                <span>JavaScript</span>
                <img className='pic' src={require('./python.canva.webp')} alt='skill-2'/>
                <span>Python</span>
                <h6>See more skills on CV :)</h6>
            </Col>
            <Col size={12} xs={12} md={12} lg={8} className='project-col'>
                <h2>Projects</h2>
                <span>Here displays all my React projects</span>
                <Tabs
                  defaultActiveKey="1"
                  id="uncontrolled-tab-example"
                >
                {projects.map((project)=>{
                  return (
                    <Tab key={project.id} eventKey={project.id} title={project.title}>
                      {project.title==='Project1'?<Project1 />:project.title==='Project2'?<Project2/>:<Project3/>}
                    </Tab>)
                })}

        </Tabs>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
