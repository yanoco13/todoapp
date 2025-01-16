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
                taskId: formData.taskId
            })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}


