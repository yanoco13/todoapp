'use client';
import React, { useState } from "react";
import ColorRadioButtons from './ColorRadioButtons';
import { fetchTasksApi, insertTaskApi } from "../api/api";

const Modal = ({ isOpen, onClose, children }) => {
    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16); // 現在時刻を "yyyy-MM-ddThh:mm" 形式に変換

    const [dateTime, setDateTime] = useState(formattedNow);

    const handleChange = (event) => {
        setDateTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`選択した日付と時間: ${dateTime}`);
    };

    if (!isOpen) return null;
    const getTasks = async () => {
        console.log("=--------------");
        try {
            console.log("-----------------げっっと");
            const taskResult = await fetchTasksApi();
            console.log(taskResult);
        } catch (error) {
            console.log("=-------------------失敗");
        }
    };

    const insertTasks = async (data) => {
        data.taskId = "ij";
        await insertTaskApi(data);
    };

    return (
        <>
            <div style={styles.overlay}>
                <div style={styles.modal}>
                    <div name="taskName">
                        <label>タスク名</label>
                        <br />
                        <input type="text" style={styles.inputTaskName} />
                    </div>
                    <div name="taskColor" style={styles.inputColorRadio}>
                        <label>色</label>
                        <ColorRadioButtons />
                    </div>
                    <div name="taskNote">
                        <label htmlFor="">備考欄</label>
                        <br />
                        <input type="textarea" style={styles.inputTaskNote} />
                    </div>
                    <div name="proceedButton">
                        <button onClick={insertTasks}>OK</button>
                    </div>
                    <div name="cancelButton">
                        <button>キャンセル</button>
                    </div>
                    <input
                        type="datetime-local"
                        id="datetime"
                        name="datetime"
                        value={dateTime}
                        onChange={handleChange}
                    />
                    <button onClick={onClose} style={styles.closeButton}>Close</button>
                </div>
            </div>
        </>

    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        width: '80%',
        height: '80%',
        maxWidth: '80%',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
    inputTaskName: {
        width: '400px',
    },
    inputColorRadio: {
        float: 'right'
    },
    inputTaskNote: {
        width: '400px',
        height: '200px'
    }
};

export default Modal;
