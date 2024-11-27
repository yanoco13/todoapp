'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const router = useRouter();
    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState("");
    const fetchApi = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/persons", { method: "GET" });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchByIdApi = async (id) => {
        try {
            const response = await fetch("http://localhost:8080/api/persons?id=" + id, { method: "GET" });
            const data = await response.json();
            setUser(data);
            console.log("fetch by id");
            console.log(user);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const insertApi = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/persons", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    personId: userId,
                    personName: userId // 仮にuserIdを名前としても使用
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("登録成功:", data);
            // 成功時の処理（例：メッセージ表示、画面更新など）
        } catch (error) {
            console.error("登録エラー:", error);
            // エラー時の処理（例：エラーメッセージ表示）
        }
    };

    const handleLogin = () => {
        fetchByIdApi(userId);
        console.log(user);
        if (user.length > 0) return;
        insertApi();
        router.push('/todo');
    };

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <p>ユーザID</p>
                        <input type="text" id="name" {...register("name", { required: "ユーザIDを入力してください。" })} />
                        <span id="name_error"></span>
                    </div>
                    <button id="submit_btn">送信</button>
                </form>
            </div>
        </>
    );
}