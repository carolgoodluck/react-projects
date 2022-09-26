import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  // Initialise the state
  state = {
    isFirst: true,  // welcome page
    isLoading: false,   // loading message
    users: [],     // list of users to present
    err: ''    // error message
  }

  // Mount the message service so it can receive messages
  componentDidMount(){
    this.token = PubSub.subscribe('response', (_, stateObj)=>{
      // Update state when it receives message
      this.setState(stateObj)
    })
  }

  // Unmount
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          // Display welcome page once opening the website
          // Show loading information when after sending http request
          // Show error information if there is something with internect
          // Display user results if everything works fine
          isFirst ? <h2>Welcome to the search app.</h2>:
          isLoading ? <h2>The page is waiting for the response from GitHub server.</h2>:
          err ? <span style={{color:'red'}}>{err}</span>: 
          users.map((userObj)=>{
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="head portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
