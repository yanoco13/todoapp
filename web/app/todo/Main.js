import React from 'react';
import styles from "../stayls/todo.css";

export default function Main() {
    return (
      <div className='main'>
        <div className='todo_list'>
        <table>
          <tr>
            <td>田中</td>
            <td>27</td>
          </tr>
          <tr>
            <td>佐藤</td>
            <td>42</td>
          </tr>
        </table>
        </div>
      </div>
    );
}