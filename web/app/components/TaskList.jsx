// components/TaskList.jsx
'use client';
import { useState, useEffect } from 'react';
import { fetchTasks } from '../api/api';  // タスク取得用 API

export default function TaskList({ userId, tabId }) {
    const [tasks, setTasks] = useState([]);

    // activeTabId（＝tabId）が変わるたびにタスクをフェッチ
    useEffect(() => {
        async function load() {
            const data = await fetchTasks(userId, tabId);
            setTasks(data);
        }
        load();
    }, [userId, tabId]);

    return (
        <div>
            <h2>タスク一覧</h2>
            {tasks.length === 0 ? (
                <p>タスクがありません。</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            {task.time && <small style={{ marginLeft: 8 }}>{task.time}</small>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
