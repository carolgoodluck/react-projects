import React, { Component } from 'react';
import './index.css'

class Item extends Component {

    state = {
        mouse: false
    }

    // Handle mouse when it hovers on the list item
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    
    // Delete a task when click delete button
    handleDelete = (id)=>{
        const {deleteTask} = this.props
        if (window.confirm('Are you sure to delete the task?'))
            deleteTask(id)
    }

    // Handle the checkbox event: change the status of a task by clicking its checkbox
    handleCheck = (id)=>{
        return (event)=>{
            let {finishTask} = this.props
            const isChecked = event.target.checked
            finishTask(id, isChecked)
        }
    }

    render() {
        const {id, name, status} = this.props
        const {mouse} = this.state
        return (
            // Change the background color when mouse hovers on the item 
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor:mouse?'#ddd':'white'}}>
                <label>
                    <input type="checkbox" checked={status} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                {/* Display delete button only when mouse hovers on the task */}
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>DELETE</button>
            </li>
        );
    }
}

export default Item;