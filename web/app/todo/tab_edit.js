import React from 'react';
import styles from "../stayls/todo.css";

export default function Header() {
    return (
      <div className='header'>
        <div className='tab_list'>
            tabname
        </div>
        <div className='tab_list'>
            tabname
        </div>
        <button className='tab_button' type="button" onClick={() => this.addNewTask()}>+</button>
      </div>
    );
}
