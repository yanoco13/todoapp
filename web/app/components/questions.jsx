import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { fetchByIdApi, insertApi } from "../api/api";
import { motion } from "framer-motion";

export default function Questions({ selected, isChecked, handleSubmit, setErrorMessage }) {
    const { register, formState: { errors } } = useFormContext();

    const [password, setPassword] = useState('');

    const questions = [
        { label: "出身小学校は？", name: "question1" },
        { label: "母親の旧姓は？", name: "question2" },
        { label: "出身地は？", name: "question3" },
        { label: "高校時代の部活動は？", name: "question4" },
        { label: "一番最初にしたアルバイトは？", name: "question5" },
    ];

    const handleShowPassword = async (data) => {
        try {
            const userResult = await fetchByIdApi(data.userId);
            if (data.userId == userResult[0][0] && data.question1 == userResult[0][3] && data.question2 == userResult[0][4]
                && data.question3 == userResult[0][5] && data.question4 == userResult[0][6] && data.question5 == userResult[0][7]
            ) {
                setPassword(userResult[0][2]);
            }
        } catch (error) {
            setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
            console.error(error.message);
        }
    };

    const shakeAnimation = {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
    };

    return (
        <div>
            <h3>以下はパスワードを忘れてしまった時のための質問です。</h3>
            {questions.map((q, index) => (
                <div key={index}>
                    <p name='formItem'>{q.label}</p>
                    <motion.div
                        animate={errors[q.name] ? shakeAnimation : {}}
                    >
                        <input
                            type="text"
                            {...register(q.name, { required: `${q.label}は必須です。` })}
                        />
                    </motion.div>
                    {errors[q.name] && (
                        <p style={{ color: 'red' }}>{errors[q.name]?.message}</p>
                    )}
                </div>
            ))}

            {(isChecked && selected === "login") && (
                <>
                    <button type="submit" onClick={handleSubmit(handleShowPassword)}>パスワードを表示</button>
                </>
            )}
            {(password != '') && (
                <>
                    <p>your password</p>
                    <p>{password}</p>
                </>
            )}
        </div>
    );
}
