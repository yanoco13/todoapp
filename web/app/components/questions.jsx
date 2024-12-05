import { useState, useEffect } from "react";

export default function Questions({ onFormChange, isChecked, selected }) {
    // const [question1, setQuestion1] = useState("");
    // const [question2, setQuestion2] = useState("");
    // const [question3, setQuestion3] = useState("");
    // const [question4, setQuestion4] = useState("");
    // const [question5, setQuestion5] = useState("");

    const [inputValues, setInputValues] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        onFormChange({ [name]: value });
    };

    return (
        < div >
            <h3>以下はパスワードを忘れてしまった時のための質問です。</h3>
            <p>質問1</p>
            <p>出身小学校は？</p>
            <input type="text" name="question1" onChange={handleInputChange} />
            <p>質問2</p>
            <p>母親の旧姓は？</p>
            <input type="text" name="question2" onChange={handleInputChange} />
            <p>質問3</p>
            <p>出身地は？</p>
            <input type="text" name="question3" onChange={handleInputChange} />
            <p>質問4</p>
            <p>高校時代の部活動は？</p>
            <input type="text" name="question4" onChange={handleInputChange} />
            <p>質問5</p>
            <p>一番最初にしたアルバイトは？</p>
            <input type="text" name="question5" onChange={handleInputChange} />
            {(isChecked === true && selected === "login") &&
                (<>
                    <h3>あなたのパスワード</h3>
                    <p>パスワード</p>
                </>)
            }
        </div >
    )
}