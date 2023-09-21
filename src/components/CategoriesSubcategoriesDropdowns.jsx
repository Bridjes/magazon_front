import React, { useState } from 'react';

const CategoriesSubcategoriesDropdowns = ({ ...props }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const CategoryList = ({ categories, register, name, setValue }) => (
        <div>
            <select {...register(name)}
                    value={selectedCategory}
                    onChange={(event) => {
                        setValue(name, event.target.value)
                        setSelectedCategory(event.target.value)
                    }}
            >
                <option id="" value="">Выберите</option>
                {Object.keys(categories).map((category) => (
                    <option id={category}
                            key={category}
                            value={category}
                    >
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );

    const SubcategoryList = ({ subcategories, register, name }) => (
        <div>
            <select {...register(name)}>
                <option id="" value="">Выберите</option>
                {subcategories.map((subcategory) => (
                    <option id={subcategory} key={subcategory} value={subcategory}>
                        {subcategory}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <div>
            <h2>{props.title}</h2>
            <CategoryList categories={props.categories}
                          name={props.name}
                          register={props.register}
                          setValue={props.setValue}
                          dropdown_name={props.dropdown_name}
            />
            {selectedCategory && (
                <div>
                    <h3>{props.subtitle}</h3>
                    <SubcategoryList subcategories={props.categories[selectedCategory]}
                                     name={props.subname}
                                     register={props.register}
                                     dropdown_name={props.dropdown_subname}
                    />
                </div>
            )}
        </div>
    );
};

export default CategoriesSubcategoriesDropdowns;