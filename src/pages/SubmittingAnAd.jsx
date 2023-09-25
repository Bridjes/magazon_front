import React, {useState} from 'react';
import {categories} from "../utils/categories";
import CarCreate from "../components/Form/CarCreate";
import classes from "../components/styles/SubmittingAnAd.component.css";
import TruckCreate from "../components/Form/TruckCreate";
import MotobikeCreate from "../components/Form/MotobikeCreate";
import ApartmentCreate from "../components/Form/ApartmentCreate";
import CottageCreate from "../components/Form/CottageCreate";
import GarageCreate from "../components/Form/GarageCreate";
import AudioCreate from "../components/Form/AudioCreate";
import HeadphonesCreate from "../components/Form/HeadphonesCreate";
import VideoEquipmentCreate from "../components/Form/VideoEquipmentCreate";

const SubmittingAnAd = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedSubcategory('');
    };

    const handleSubcategoryChange = (e) => {
        setSelectedSubcategory(e.target.value);
    };

    const renderSubcategories = () => {
        if (selectedCategory) {
            return categories[selectedCategory].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                    {subcategory}
                </option>
            ));
        }
        return null;
    };

    const renderForm = () => {
        switch (selectedSubcategory) {
            case "Легковые авто":
                return <CarCreate/>
            case "Грузовики и автобусы":
                return <TruckCreate/>
            case "Мотоциклы":
                return <MotobikeCreate/>
            case "Квартиры":
                return <ApartmentCreate/>
            case "Дома, дачи, коттеджи":
                return <CottageCreate/>
            case "Гаражи и стоянки":
                return <GarageCreate/>
            case "Аудиотехника":
                return <AudioCreate/>
            case "Наушники":
                return <HeadphonesCreate/>
            case "ТВ и видеотехника":
                return <VideoEquipmentCreate/>
            default:
                return null
        }
    };

    return (
        <div>
            <div className="categs-creating">
                <label className="label-creating" htmlFor="category">Выберите категорию:</label>
                <select id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="dropdown-creating"
                >
                    <option value="">-- Выберите категорию --</option>
                    {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                {selectedCategory && (
                    <div className="subcateg-creating">
                        <label className="label-creating" htmlFor="subcategory">Выберите подкатегорию:</label>
                        <select id="subcategory"
                                value={selectedSubcategory}
                                onChange={handleSubcategoryChange}
                                className="dropdown-creating"
                        >
                            <option value="">-- Выберите подкатегорию --</option>
                            {renderSubcategories()}
                        </select>
                    </div>
                )}
            </div>

            {renderForm()}
        </div>
    );
};

export default SubmittingAnAd;