'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [stones, setStone] = useState([]);
    const [userId, setUserId] = useState("");
    const fetchApi = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/persons", { method: "GET" });
            const data = await response.json();
            setStone(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

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
        insertApi();
        router.push('/todo');
    };

    return (
        <>
            <div>
                <h1>Login Page</h1>
                <p>ユーザID</p>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button type="submit" onClick={handleLogin}>送信</button>
            </div>
        </>
    );
}