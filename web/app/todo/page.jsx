// app/todo/page.jsx (Next.js App Router／クライアントコンポーネント)
'use client';

import { useState, useEffect } from 'react';
import Tab from '../components/Tab';
import TaskList from '../components/TaskList';
import { fetchTabs } from '../api/api';

export default function TodoPage() {
    const userId = localStorage.getItem('userId');

    // ① 全タブ一覧と、② 選択中タブID を state で管理
    const [tabs, setTabs] = useState([]);
    const [activeTabId, setActiveTabId] = useState(null);

    // マウント時にタブをフェッチ
    useEffect(() => {
        async function load() {
            const data = await fetchTabs(userId);
            setTabs(data);
            if (data.length > 0) {
                setActiveTabId(data[0].id);  // 最初のタブを自動選択（任意）
            }
        }
        load();
    }, [userId]);

    return (
        <div className="todo-container" style={{
            display: 'flex',
            height: '100vh'
        }}>
            {/* サイドバーにタブ一覧をループ描画 */}
            <nav className="tab-sidebar" style={{
                width: 200, borderRight: '1px solid #ddd', padding: 16
            }}>
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        tab={tab}
                        isActive={tab.id === activeTabId}
                        onClick={() => setActiveTabId(tab.id)}
                    />
                ))}
            </nav>

            {/* 選択中タブに応じて TaskList を表示 */}
            <main className="task-area" style={{ flex: 1, padding: 16 }}>
                {activeTabId ? (
                    <TaskList userId={userId} tabId={activeTabId} />
                ) : (
                    <p>タブを選択してください。</p>
                )}
            </main>
        </div>
    );
}
