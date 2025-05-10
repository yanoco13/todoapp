'use client';
import styles from "../stayls/todo.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React, { useEffect } from 'react';

export default function Header() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [tab, setTab] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const id = "tab001";
      try {
        const response = await fetch(`http://localhost:8080/api/tabs?id=${id}`, { method: "GET" });
        console.log(response);
        const data = await response.json();
        setTab(data);
        console.log("fetch by id:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const Tab = [
    {
      tabName: 'todo1',
    },
    {
      tabName: 'todo2',
    }
  ]

  return (
    <div className='heade'>
      {tab.map((tab) => {
        return (
          <TabList
            tabName={tab.tabName}
            tabId={tab.tabId}
            key={tab.tabId}
          />
        )
      })}
      <button className='tab_button' type="button" onClick={() => this.addNewTask()}>+</button>
    </div>
  );
}
