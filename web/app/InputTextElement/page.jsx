/**
 * ログイン前フォーム（テキスト）
 * @param {*} param0 
 * @returns 
 */
export const InputTextForm = ({ title, name, errorMessage }) => {
    return (
        <div className="mt-6">
            <label
                htmlFor={name}
                className="mb-2 inline-block text-sm text-gray-700 sm:text-base"
            >
                {title}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                autoComplete={name}
            />
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        </div>
    );
};

/**
 * ログイン前フォーム（パスワード）
 * @param {*} param0
 * @returns
 */
export const InputPassForm = ({ title, name, errorMessage }) => {
    return (
        <div className="mt-6">
            <label
                htmlFor={name}
            >
                {title}
            </label>
            <input
                type="password"
                id={name}
                name={name}
                autoComplete={name}
            />
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        </div>
    );
};