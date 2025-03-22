import React from 'react';
import { useState } from "react";
import styles from "../stayls/todo.css";

export default function tabList({tabName ,tabId}) {
  const [task, setTab] = useState([]);
  const fetchByIdApi = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks?record_tab_id=${tabId}`, { method: "GET" });
        const data = await response.json();
        setTab(data);
        console.log("fetch by id:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  };
  
  const todoSelect = async () => {
    await fetchByIdApi(tabName);
    
  };

  return (
    <button className='tab_list' type="button" onClick={todoSelect}>
        {tabName}
    </button>
  );
}
