import React, {useState} from 'react';
import {useFatching} from "../hooks/useFatching";
import {useDispatch, useSelector} from "react-redux";
import FetchCreateCar from "../API/car";
import MyLoader from "../components/UI/Loader/MyLoader";
import MyInput from "../components/UI/Input/MyInput";
import {useNavigate} from "react-router-dom";
import MyButton from "../components/UI/Button/MyButton";
import CategoriesSubcategories from "../components/CategoriesSubcategories";
import {categories} from "../utils/categories";
import {load_car_fetch} from "../store/carReduser";

const MainPage = () => {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.cars.cars)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState()

    return (
        <div>
            <CategoriesSubcategories categories={categories}/>
            <MyButton onClick={() => dispatch(load_car_fetch({
                setIsLoading: setIsLoading
            }))}>
                Принять данные
            </MyButton>
        </div>
    );
};

export default MainPage;