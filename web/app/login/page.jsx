'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import Questions from "../components/Questions";
import RadioButtons from "../components/LoginRadioButtons";
import ColorRadioButtons from "../components/ColorRadioButtons";
import { fetchByIdApi, insertApi } from "../api/api";
import { motion } from "framer-motion";
import '../styles/globals.css';


export default function Home() {
    const methods = useForm();
    const { handleSubmit, watch, formState: { errors } } = methods;
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = async (data) => {
        try {
            const userResult = await fetchByIdApi(data.userId);
            if (userResult.length === 0) {
                await insertApi(data);
                localStorage.setItem("userId", data.userId);
                console.log(data.userId);
                router.push(`/todo?userId=${data.userId}`);
            } else {
                setErrorMessage("こちらのユーザIDは使用済です。他のユーザIDを検討してください。")
            }
        } catch (error) {
            setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
        }
    };

    const handleLogin = async (data) => {
        try {
            const userResult = await fetchByIdApi(data.userId);
            if (userResult.length > 0) {
                if (data.userId === userResult[0][0] && data.userPassword === userResult[0][2]) {
                    localStorage.setItem("userId", data.userId);
                    router.push('/todo?userId=${data.userId}');
                } else {
                    setErrorMessage("ユーザIDまたは、パスワードが間違っています。やり直してください。")
                }
            } else {
                setErrorMessage("ユーザIDを間違えています。登録していない場合は、サインアップに変更してください。");
            }
        } catch (error) {
            setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
        }
    };

    const shakeAnimation = {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
    };

    return (
        <form id='form' class='formContainer'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <h1 id='logo'>Login</h1>
                <RadioButtons
                    id='radio'
                    selected={watch('selected')}
                    handleInputChange={(e) => methods.setValue('selected', e.target.value)}
                />

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <FormProvider {...methods}>
                    <p class='formItem'>ユーザID</p>
                    <motion.div
                        animate={errors.userId ? shakeAnimation : {}}
                    >
                        <input
                            type="text"
                            {...methods.register("userId", { required: "ユーザIDは必須です。" })}
                        />
                    </motion.div>
                    {errors.userId && <p style={{ color: 'red' }}>{errors.userId.message}</p>}

                    <p class='formItem'>パスワード</p>
                    <motion.div
                        animate={errors.userPassword ? shakeAnimation : {}}
                    >
                        <input
                            type="password"
                            {...methods.register("userPassword", { required: "パスワードは必須です。" })}
                        />
                    </motion.div>
                    {errors.userPassword && <p style={{ color: 'red' }}>{errors.userPassword.message}</p>}

                    {watch('selected') === "login" && (
                        <>
                            <label>
                                パスワードを忘れてしまった場合はチェックしてください
                            </label>
                            <input
                                type="checkbox"
                                {...methods.register("isChecked")}
                            />
                            <br />
                            {!watch('isChecked') && (
                                <button type="submit" onClick={handleSubmit(handleLogin)}>ログイン</button>
                            )}
                        </>
                    )}

                    {(watch('selected') === "signUp" || (watch('selected') === "login" && watch('isChecked'))) && (
                        <>
                            <Questions selected={watch('selected')} isChecked={watch('isChecked')} handleSubmit={handleSubmit} setErrorMessage={setErrorMessage} />
                            {(watch('selected') === "signUp") && (
                                <>
                                    <br />
                                    <button type="submit" onClick={handleSubmit(handleSignup)}>登録</button>
                                </>
                            )}
                        </>
                    )}
                </FormProvider>
            </motion.div >
        </form >
    );
}
