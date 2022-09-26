import React, {Component} from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer';
import './App.css'

export default class App extends Component{
  state = {
    tasks: [
      {id:'001', name:'Get up', status:true},
      {id:'002', name:'Meditation', status:true},
      {id:'003', name:'React Learning', status:true},
      {id:'004', name:'Gym', status:false},
      {id:'005', name:'Dinner', status:false},
    ]
  }

  // Delete a task
  deleteTask = (id)=>{
    const {tasks} = this.state
    const newTasks = tasks.filter((task)=>{
      return task.id !== id
    })
    this.setState({tasks:newTasks})
  }

  // Add a new task
  addTask = (newTask)=>{
    const {tasks} = this.state
    const newTasks = [newTask, ...tasks]
    this.setState({tasks: newTasks})
  }

  // Finish a task
  finishTask = (id, isChecked)=>{
    const {tasks} = this.state
    const newTasks = tasks.map((task)=>{
      if (task.id === id) return {...task, status:isChecked}
      else return {...task}
    })
    this.setState({tasks: newTasks})
  }

  // Select all tasks
  selectAllTasks = (flag)=>{
    const {tasks} = this.state
    const allTasks = tasks.map((task)=>{
      return {...task, status:flag}
    })
    this.setState({tasks:allTasks})
  }

  // Clear finished tasks
  clearFinished = ()=>{
    const {tasks} = this.state
    const unfinishedTasks = tasks.filter((task)=>{
      return !task.status
    })
    this.setState({tasks:unfinishedTasks})
  }

  render() {
    const {tasks} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTask={this.addTask}/>
          <List tasks={tasks} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
          <Footer tasks={tasks} selectAllTasks={this.selectAllTasks} clearFinished={this.clearFinished}/>
        </div>
      </div>
    );
  }
}