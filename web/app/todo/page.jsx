'use client';
import { useState, useEffect } from "react";
import styles from "../stayls/todo.css";
import Header from './Header';
import Tab from './tab';

export default function Home() {
    return (
      <div className = "wrapper">
        <div className="tab_todo">
          <Tab/>
        </div>
      </div>
    )
}