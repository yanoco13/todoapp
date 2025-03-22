export default function LoginRadioButtons({ selected, handleInputChange }) {
    return (
        <div>
            {["signUp", "login"].map(value => (
                <div key={value}>
                    <input
                        type="radio"
                        name="selected"
                        value={value}
                        checked={selected === value}
                        onChange={handleInputChange}
                    />
                    <label>{value === "signUp" ? "サインアップ" : "ログイン"}</label>
                </div>
            ))}
        </div>
    );
}
