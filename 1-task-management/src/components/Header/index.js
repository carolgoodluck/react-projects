import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css'

class Header extends Component {

    // Add a new task when user click 'enter' on keyboard
    handleKeyUp = (event)=>{
        const {addTask} = this.props
        if (event.keyCode === 13)
            {
                const name = event.target.value
                if (name !== ''){
                    const newTask = {id: nanoid(), name, status: false}
                    addTask(newTask)
                    // Restore the input box after adding a task for better user experience
                    event.target.value = ''
                }
                // Do not allow empty input
                else{
                    alert('Please do not input empty task, thank you.')
                    return
                }
            }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Input a new task, please confirm by clicking [⏎]"/>
            </div>
        );
    }
}

export default Header;