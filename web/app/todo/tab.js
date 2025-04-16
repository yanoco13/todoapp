'use client';
import styles from "../stayls/todo.css";
import { useState } from "react";
import TabList from './tabList';
import React, { useEffect } from 'react';

export default function Main() {
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
  },[]);
  
    return (
      <div>
        {tab.map((tab) => {
          return(
            <TabList 
              tabName={tab.tabName}
              tabId={tab.tabId}
              key={tab.tabId}
            />
          )
        })}
      </div>
    );
}