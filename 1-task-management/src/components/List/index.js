import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
    render() {
        const {tasks, deleteTask, finishTask} = this.props
        return (
            <ul className="todo-main">
                {tasks.map((task)=>{
                    return <Item key={task.id} {...task} deleteTask={deleteTask} finishTask={finishTask}/>
                })}
            </ul>
        );
    }
}

export default List;