import React, { useState } from 'react';

function CategoriesDropdown({ categories, setValue, register, name }) {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <select {...register(name)}
                value={selectedItem}
                onChange={(event) => {
                    setSelectedItem(event.target.value)
                    setValue(name, event.target.value)
                }}
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