import React from 'react';
import { useState } from "react";
import styles from "../stayls/todo.css";

export default function tabList({tabName ,key}) {
  const [task, setTab] = useState([]);
  const fetchByIdApi = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks?record_tab_id=${key}`, { method: "GET" });
        const data = await response.json();
        setUser(data);
        console.log("fetch by id:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  };
  
  const todoSelect = async () => {
    await fetchByIdApi(tabName);
    if (user.length > 0) return;
    await insertApi();
    router.push('/todo');
  };

  return (
    <button className='tab_list' type="button" onClick={todoSelect}>
        {tabName}
    </button>
  );
}
