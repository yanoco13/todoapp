'use client';
import React, { useState } from "react";
import ColorRadioButtons from './ColorRadioButtons';
import { fetchTasksApi, insertTaskApi } from "../api/api";
import { useForm, FormProvider } from "react-hook-form";

const Modal = ({ isOpen, onClose, children }) => {
    const methods = useForm();
    const { handleSubmit, watch, formState: { errors } } = methods;

    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16); // 現在時刻を "yyyy-MM-ddThh:mm" 形式に変換

    const [dateTime, setDateTime] = useState(formattedNow);

    const handleChange = (event) => {
        setDateTime(event.target.value);
    };

    const registTask = async (data) => {
        try {
            await insertTaskApi(data);
            onClose;
        } catch (error) {
            setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
        }
    }

    if (!isOpen) return null;

    return (
        <>
            <div style={styles.overlay}>
                <div style={styles.modal}>
                    <FormProvider>
                        <div name="taskName">
                            <label>タスク名</label>
                            <br />
                            <input type="text" style={styles.inputTaskName} {...methods.register("taskName", { required: "タスク名は必須です。" })} />
                        </div>
                        <div name="taskColor" style={styles.inputColorRadio} >
                            <label>色</label>
                            <ColorRadioButtons
                                id='colorRadio'
                                selected={watch('taskColor')}
                                handleInputChange={(e) => methods.setValue('taskColor', e.target.value)}
                                {...methods.register("taskColor")}
                            />
                        </div>
                        <div>
                            <label htmlFor="">タスク開始時間</label>
                            <input
                                type="datetime-local"
                                id="taskStartDate"
                                name="datetime"
                                onChange={handleChange}
                                {...methods.register("taskStartDate")}
                            />
                        </div>
                        <div>
                            <label htmlFor="">タスク終了時間</label>
                            <input
                                type="datetime-local"
                                id="taskEndDate"
                                name="datetime"
                                onChange={handleChange}
                                {...methods.register("taskEndDate")}
                            />
                        </div>

                        <div name="taskNote">
                            <label htmlFor="">備考欄</label>
                            <br />
                            <input type="textarea" style={styles.inputTaskNote} {...methods.register("taskNote")} />
                        </div>
                        <div name="proceedButton">
                            <button onClick={handleSubmit(registTask)}>OK</button>
                        </div>
                        <div name="cancelButton">
                            <button>キャンセル</button>
                        </div>
                        <button onClick={onClose} style={styles.closeButton}>Close</button>
                    </FormProvider>
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
