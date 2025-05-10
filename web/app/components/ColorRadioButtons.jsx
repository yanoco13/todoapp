import React, { forwardRef } from 'react';

const ColorRadioButtons = forwardRef(({ selected, handleInputChange }, ref) => {
    const colorArr = [
        { label: "赤", name: 'red', key: 'red' },
        { label: "青", name: 'blue', key: 'blue' },
        { label: "黄", name: 'yellow', key: 'yellow' },
        { label: "緑", name: 'green', key: 'green' },
        { label: "紫", name: 'purple', key: 'purple' },
        { label: "橙", name: 'orange', key: 'orange' },
        { label: "茶", name: 'brown', key: 'brown' },
        { label: "黒", name: 'black', key: 'black' },
        { label: "白", name: 'white', key: 'white' },
    ];

    return (
        <div ref={ref}>
            {colorArr.map((q) => (
                <div key={q.key}>
                    <label>{q.label}</label>
                    <input
                        type="radio"
                        name="color"
                        value={q.name}
                        checked={selected === q.name}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
        </div>
    );
});

export default ColorRadioButtons;
