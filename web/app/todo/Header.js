import React from 'react';
import styles from "../stayls/todo.css";
import TabList from './tabList';

export default function Header() {
  const Tab = [
    {
      tabName: 'todo1',
    },
    {
      tabName: 'todo2',
    }
  ]

  return (
    <div className='header'>
      {Tab.map((Tab) => {
        return (
          <TabList
            tabName={Tab.tabName}
          />
        )
      })}
      <button className='tab_button' type="button" onClick={() => this.addNewTask()}>+</button>
    </div>
  );
}
