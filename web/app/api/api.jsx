//ユーザIDからフェッチするAPI
export const fetchByIdApi = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/api/persons?id=${id}`, { method: "GET" });
        if (!response.ok) throw new Error('Failed to fetch data');
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

//ユーザ情報をDBにINSERTするAPI
export const insertApi = async (formData) => {
    try {
        const response = await fetch("http://localhost:8080/api/persons", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                personId: formData.userId,
                personName: formData.userId,
                loginPassword: formData.userPassword,
                question1: formData.question1,  // formDataの質問をセット
                question2: formData.question2,
                question3: formData.question3,
                question4: formData.question4,
                question5: formData.question5
            })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

//登録されているタスクを全てfetchするAPI
export const fetchTasksApi = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks`, { method: "GET" });
        if (!response.ok) throw new Error('Failed to fetch data');
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

//タスク情報をDBにINSERTするAPI
export const insertTaskApi = async (formData) => {
    try {
        const response = await fetch("http://localhost:8080/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                taskId: Math.random().toString(32).substring(2),
                taskName: formData.taskName,
                taskColor: formData.taskColor,
                taskStartTime: formData.taskStartDate,
                taskEndTime: formData.taskEndDate,
                taskNote: formData.taskNote
            })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

// src/api/api.js

/**
 * 指定ユーザのタブ一覧を取得
 * GET /api/users/{userId}/tabs
 */
export async function fetchTabs(userId) {
    const res = await fetch(`http://localhost:8080/api/users/${userId}/tabs`, { method: "GET" });
    if (!res.ok) {
        throw new Error(`fetchTabs failed: ${res.status}`);
    }
    return res.json();
}

/**
 * 指定タブのタスク一覧を取得
 * GET /api/users/{userId}/tabs/{tabId}/tasks
 */
export async function fetchTasks(userId, tabId) {
    const res = await fetch(`http://localhost:8080/api/users/${userId}/tabs/${tabId}/tasks`, { method: "GET" });
    if (!res.ok) {
        throw new Error(`fetchTasks failed: ${res.status}`);
    }
    return res.json();
}

export async function addTask(userId, tabId, { title, time }) {
    const res = await fetch(`/api/users/${userId}/tabs/${tabId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, time })
    });
    if (!res.ok) {
        throw new Error(`addTask failed: ${res.status}`);
    }
    return res.json();
}
