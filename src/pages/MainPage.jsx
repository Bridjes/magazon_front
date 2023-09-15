import React, {useState} from 'react';
import {useFatching} from "../hooks/useFatching";
import {useDispatch} from "react-redux";
import FetchCreateCar from "../API/car";
import MyLoader from "../components/UI/Loader/MyLoader";

const MainPage = () => {
    // диспетчер Redux
    const dispatch = useDispatch()
    const [rst, setRst] = useState()

    const [fetching, isLoading, loadingError] = useFatching(async (formData, pk) => {
        // получаем JSON с ответом
        setRst(await FetchCreateCar.update_car(formData, pk))
    })

    const handleSubmit = async (event) => {
        // чтобы форма не била ошибки
        event.preventDefault();
        
        await fetching(await new FormData(event.target), 2)
    };

    return (
        <div>
            {isLoading
                ? <div className={"loader-box"}>
                    <MyLoader/>
                </div>
                : <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>
                        Name:
                        <input type="text" name="title"/>
                    </label>
                    <label>
                        Image:
                        <input type="file" name="photo"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    );
};

export default MainPage;