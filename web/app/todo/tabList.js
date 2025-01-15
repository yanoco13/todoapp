import React from 'react';
import styles from "../stayls/todo.css";

export default function tabList({tabName}) {
    return (
        <div className='tab_list'>
          {tabName}
        </div>
    );
}
