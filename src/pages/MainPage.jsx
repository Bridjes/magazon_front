import React, {useState} from 'react';
import {useFatching} from "../hooks/useFatching";
import {useDispatch} from "react-redux";
import FetchCreateCar from "../API/car";
import MyLoader from "../components/UI/Loader/MyLoader";
import MyInput from "../components/UI/Input/MyInput";
import {useNavigate} from "react-router-dom";
import MyButton from "../components/UI/Button/MyButton";

const MainPage = () => {

    const navigate = useNavigate()

    return (
        <div>

        </div>
    );
};

export default MainPage;