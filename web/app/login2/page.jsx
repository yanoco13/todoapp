'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import Questions from "../components/Questions";
import RadioButtons from "../components/LoginRadioButtons";
import { fetchByIdApi, insertApi } from "../api/api";
import { motion } from "framer-motion";
import '../styles/globals.css'


export default function Home() {
    const methods = useForm();
    const { handleSubmit, watch, formState: { errors } } = methods;
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <FormProvider {...methods}>
            <input type="text" id="taskName" />
            <RadioButtons />
            <input type="text" id="note" />

            <button id="process"></button>
            <button id="cancel"></button>
        </FormProvider>
    );
}
