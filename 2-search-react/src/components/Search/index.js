import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Search extends Component {

  // Click the search button to get results relevant to user input
  handleSearch = ()=>{
    const {value:input} = this.inputElement
    
    // Update the web page 
    PubSub.publish('response', {isFirst:false, isLoading:true})

    // Send request to GitHub for response
    axios.get(`https://api.github.com/search/users?q=${input}`).then(
      response =>{
        const users = response.data.items
        PubSub.publish('response', {isLoading:false, users})
      },
      error => {
        PubSub.publish('response', {isLoading:false, err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={(inputElement)=>{this.inputElement = inputElement}} className="searchbox" type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.handleSearch}>Search</button>
          </div>
      </section>
    )
  }
}
