'use client';
import React, { useState } from 'react';

export default function TodoList({ tasks, onAddTask, onToggleDone, onReorderTasks }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // ドラッグ中のタスクインデックスを保存するためのステート
  const [draggedIndex, setDraggedIndex] = useState(null);

  // 新しいタスクを追加するフォームのハンドラ
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    onAddTask(newTaskTitle);
    setNewTaskTitle('');
  };

  // ドラッグ開始時に呼ばれるハンドラ
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    // ブラウザによってはドラッグ中の画像を表示するために何かしらのデータ転送が必要
    // 例: e.dataTransfer.setData("text/plain", index.toString());
  };

  // ドラッグ要素が他の要素上を通過するときに呼ばれるハンドラ
  // ここで `event.preventDefault()` しないとドロップできない
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // ドロップ時に呼ばれるハンドラ
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    // ドラッグ元とドロップ先が同じなら何もしない
    if (draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    // タスク配列を並び替えて親コンポーネントへ通知
    onReorderTasks(draggedIndex, dropIndex);

    // ドラッグ状態をリセット
    setDraggedIndex(null);
  };

  return (
    <div>
      {/* タスク追加フォーム */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="新しいタスクを追加"
        />
        <button type="submit">追加</button>
      </form>

      {/* タスク一覧 (ドラッグアンドドロップ対応) */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            style={{ margin: '8px 0', cursor: 'grab' }}
            draggable={true}                        // ドラッグ可能にする
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleDone(task.id)}
            />
            {task.done ? <s>{task.title}</s> : task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
