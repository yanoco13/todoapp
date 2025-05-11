// components/TaskList.jsx
'use client'
import { useState, useEffect, useCallback } from 'react'
import { fetchTasks } from '../api/api'
import { FaGripVertical } from 'react-icons/fa'
import { addTask } from '../api/api'

export default function TaskList({ userId, tabId }) {
    const [tasks, setTasks] = useState([])
    const [newTime, setNewTime] = useState('')
    const [newTitle, setNewTitle] = useState('')

    // 追加ボタン押下時に API call → ステート更新
    const handleAdd = async e => {
        e.preventDefault()
        if (!newTitle.trim()) return
        try {
            const created = await addTask(userId, tabId, { title: newTitle, time: newTime })
            setTasks(prev => [...prev, created])
            setNewTitle('')
            setNewTime('')
        } catch (err) {
            console.error(err)
            alert('タスクの追加に失敗しました')
        }
    }

    useEffect(() => {
        async function load() {
            const data = await fetchTasks(userId, tabId)
            setTasks(data)
        }
        load()
    }, [userId, tabId])

    const handleDragStart = useCallback((e, index) => {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', index)
    }, [])

    const handleDragOver = useCallback(e => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }, [])

    const handleDrop = useCallback((e, dropIndex) => {
        e.preventDefault()
        const dragIndex = Number(e.dataTransfer.getData('text/plain'))
        if (dragIndex === dropIndex) return
        setTasks(prev => {
            const updated = [...prev]
            const [moved] = updated.splice(dragIndex, 1)
            updated.splice(dropIndex, 0, moved)
            return updated
        })
        // TODO: サーバーに順序保存するAPI呼び出し
    }, [])

    return (
        <div>
            {/* --- タスク追加フォーム --- */}
            <form onSubmit={handleAdd} style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
                <input
                    type="text"
                    placeholder="タスク名"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    style={{ flex: 1, padding: 8 }}
                    required
                />
                <input
                    type="time"
                    value={newTime}
                    onChange={e => setNewTime(e.target.value)}
                    style={{ width: 100, padding: 8 }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>追加</button>
            </form>
            <h2>タスク一覧</h2>
            {tasks.length === 0
                ? <p>タスクがありません。</p>
                : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {tasks.map((task, idx) => (
                            <li
                                key={task.id}
                                draggable
                                onDragStart={e => handleDragStart(e, idx)}
                                onDragOver={handleDragOver}
                                onDrop={e => handleDrop(e, idx)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '8px',
                                    margin: '4px 0',
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    background: '#fff',
                                    cursor: 'grab'
                                }}
                            >
                                {/* ドラッグハンドル */}
                                <FaGripVertical
                                    style={{ marginRight: 8, cursor: 'grab' }}
                                    title="ドラッグして並び替え"
                                />
                                <span>{task.title}</span>
                                {task.time && <small style={{ marginLeft: 8 }}>{task.time}</small>}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
