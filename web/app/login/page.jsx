'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import Questions from "../components/questions";

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [selected, setSelected] = useState("signUp");
    const [isChecked, setChecked] = useState(false);

    const [person, setPerson] = useState({
        userId: "",
        userPassword: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
    });

    const loginButtons = [
        { label: "サインアップ", value: "signUp" },
        { label: "ログイン", value: "login" }
    ];

    const handleFormChange = (newData) => {
        setPerson(prevData => ({ ...prevData, ...newData }));
    };

    const fetchByIdApi = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/persons?id=${id}`, { method: "GET" });
            const data = await response.json();
            setUser(data);
            console.log("fetch by id:", data);
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
                    personName: userId,
                    loginPassword: userPassword,
                    question1: person.question1,
                    question2: person.question2,
                    question3: person.question3,
                    question4: person.question4,
                    question5: person.question5
                })
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log("登録成功:", data);
        } catch (error) {
            console.error("登録エラー:", error);
        }
    };

    const handleLogin = async () => {
        await fetchByIdApi(userId);
        if (user.length > 0) return;
        await insertApi();
        router.push('/todo');
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                {loginButtons.map(radio => (
                    <div key={radio.value}>
                        <input
                            type="radio"
                            name="buttons"
                            value={radio.value}
                            checked={radio.value === selected}
                            onChange={(e) => setSelected(e.target.value)}
                        />
                        <label>{radio.label}</label>
                    </div>
                ))}
            </div>

            <p>ユーザID</p>
            <input type="text" id="loginName" onChange={(e) => setUserId(e.target.value)} />
            <p>パスワード</p>
            <input type="password" id="loginPassword" onChange={(e) => setUserPassword(e.target.value)} />

            {selected === "login" && (
                <>
                    <label>パスワードを忘れてしまった場合はチェックしてください</label>
                    <input
                        type="checkbox"
                        name="checked"
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    />
                    <div>
                        <button id="submit_btn" type="button" onClick={handleLogin}>ログイン</button>
                    </div>

                </>
            )}

            {(selected === "signUp" || selected === "login" && isChecked === true) &&
                (<>
                    <Questions onFormChange={handleFormChange} selected={selected} isChecked={isChecked} />
                    <button id="signup_btn" type="button" onClick={handleLogin}>登録</button>
                </>)
            }
        </div>
    );
}
