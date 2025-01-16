import React from 'react';
import styles from "../stayls/todo.css";

export default function List({todoName}) {
    return (
          <div className='todo_list'>
            <div　className='todo_name'>
              {todoName}
            </div>
            <button className='task_edit' type="button" onClick={() => this.addNewTask()}>△</button>
          </div>
    );
}