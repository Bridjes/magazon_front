import React, { useState } from 'react';
import classes from "./CategoriesSubcategoriesDropdown.component.css"

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
        <div className="categories-subcategories">
            <label htmlFor={props.name} >{props.title}</label>
            <CategoryList categories={props.categories}
                          name={props.name}
                          register={props.register}
                          setValue={props.setValue}
                          dropdown_name={props.dropdown_name}
            />
            {selectedCategory && (
                <div className="subcategories">
                    <label htmlFor={props.subname}>{props.subtitle}</label>
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