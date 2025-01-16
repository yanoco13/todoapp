'use client';
import { useState, useEffect } from "react";
import styles from "../stayls/todo.css";
import Header from './Header';
import Main from './Main';

export default function Home() {
    return (
      <div className = "wrapper">
        <div className="tab_todo">
          <Header />
          <Main/>
        </div>
      </div>
    )
}