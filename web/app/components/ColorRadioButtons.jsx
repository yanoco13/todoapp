export default function ColorRadioButtons({ selected, handleInputChange }) {

    const colorArr = [{ label: "赤", name: 'red' }
        , { label: "青", name: 'blue' }
        , { label: "黄", name: 'yellow' }
        , { label: "緑", name: 'green' }
        , { label: "紫", name: 'purple' }
        , { label: "橙", name: 'orange' }
        , { label: "茶", name: 'brown' }
        , { label: "黒", name: 'black' }
        , { label: "白", name: 'white' }
    ];

    return (
        <div>
            {colorArr.map((q, index) => (
                <>
                    <div key={index}>
                        <label>{q.label}</label>
                        <input type="radio" />
                    </div>

                </>
            ))}
        </div>
    );
}
