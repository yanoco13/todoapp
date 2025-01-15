import React from 'react';
import styles from "../stayls/todo.css";
import List from './todoList';

export default function Main() {
  const todo = [
    {
      todoName: '勉強',
    },
    {
      todoName: '掃除',
    }
  ]

    return (
      <div className='main'>
        <div className='todo'>
          <div>
            <div className='todo_title'>
              todo1
            </div>
            {todo.map((todo) => {
              return(
                <List 
                  todoName = {todo.todoName}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
}