import React, { useState } from 'react';

function CategoriesDropdown({ categories, setValue, register, name, className }) {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <select {...register(name)}
                value={selectedItem}
                onChange={(event) => {
                    setSelectedItem(event.target.value)
                    setValue(name, event.target.value)
                }}
                className={className}
        >
            {categories.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}

export default CategoriesDropdown;