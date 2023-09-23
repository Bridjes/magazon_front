import React, {useState} from 'react';

const CategoriesSubcategories = ({...props}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const CategoryButton = ({ category, onClick }) => (
      <button onClick={onClick}>{category}</button>
    );

    const SubcategoryButton = ({ subcategory }) => (
      <button style={{ marginLeft: '20px' }}>{subcategory}</button>
    );

    const CategoryList = ({ categories, onCategoryClick }) => (
      <div>
        {Object.keys(categories).map((category) => (
          <CategoryButton
            key={category}
            category={category}
            onClick={() => onCategoryClick(category)}
          />
        ))}
      </div>
    );

    const SubcategoryList = ({ subcategories }) => (
      <div>
        {subcategories.map((subcategory) => (
          <SubcategoryButton key={subcategory} subcategory={subcategory} />
        ))}
      </div>
    );

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className={props.className}>
            <h2>Категории</h2>
              <CategoryList categories={props.categories} onCategoryClick={handleCategoryClick} />
              {selectedCategory && (
                <div>
                  <h3>Подкатегории для {selectedCategory}</h3>
                  <SubcategoryList subcategories={props.categories[selectedCategory]} />
                </div>
              )}
        </div>
    );
};

export default CategoriesSubcategories;