import React, { Component } from 'react';
import './index.css'

class Footer extends Component {

    // Select all tasks
    handleSelectAll = (event)=>{
        const {selectAllTasks} = this.props
        const isAllSelected = event.target.checked
        // console.log(isAllSelected)
        selectAllTasks(isAllSelected)
    }

    // Handle clear finished tasks
    handleClearFinished = ()=>{
        const {clearFinished} = this.props
        clearFinished()
    }
        

    render() {
        const {tasks} = this.props
        // Calculate the number of completed tasks
        const doneTasks = tasks.reduce((pre,task)=>{return pre+(task.status?1:0)}, 0)
        const allTasks = tasks.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked={doneTasks===allTasks && allTasks!==0 ?true:false} onChange={this.handleSelectAll}/>
                Select All Tasks
                <br></br>
                <span>Completed tasks: {doneTasks} </span> / All tasks: {allTasks}
                </label>
                <button onClick={this.handleClearFinished} className="btn btn-danger">Clear all completed tasks</button>
            </div>
        );
    }
}

export default Footer;