'use client';
import { useState, useEffect } from "react";

export const FetchApi = () => {
	const [stones, setStone] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:8080/api/persons", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			// APIから渡されるレスポンスデータ(data)をstateにセットする
			.then((data) => {
				setStone(data);
			});
	}, []);
	console.log("data");
};
