import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_cottage_fetch} from "../../store/cottageReduser";
import {apartment_deal_type, apartment_salesman} from "../../utils/apartment";

const CottageCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_cottage_fetch({data:data, setIsLoading:setIsLoading}))
    };

    return (
        <div>
            {isLoading
                ? <div className="loader-box">
                    <MyLoader/>
                </div>
                : <form onSubmit={handleSubmit(onSubmit)}
                        className="form"
                >
                    <label htmlFor="title">Название товара/услуги*</label>
                    <input {...register("title")} id="title" type="text" />

                    <label htmlFor="photo">Фото</label>
                    <input {...register("photo")} id="photo" type="file" />

                    <label htmlFor="deal_type">Тип сделки</label>
                    <CategoriesDropdown categories={apartment_deal_type}
                                        setValue={setValue}
                                        register={register}
                                        name="deal_type"
                    />

                    <label htmlFor="address">Адрес</label>
                    <input {...register("address")} id="address" type="text" />

                    <label htmlFor="salesman">Продавец</label>
                    <CategoriesDropdown categories={apartment_salesman}
                                        setValue={setValue}
                                        register={register}
                                        name="salesman"
                    />

                    <label htmlFor="description">Описание</label>
                    <textarea {...register("description")} id="description" />

                    <label htmlFor="price">Цена</label>
                    <input {...register("price")} id="price" type="text" />

                    <div className="categories-sub">
                        <CategoriesSubcategoriesDropdowns categories={locations}
                                                          register={register}
                                                          setValue={setValue}
                                                          name="region"
                                                          subname="city"
                                                          title="Область*"
                                                          subtitle="Город / Район"
                        />
                    </div>

                    <button type="submit">Подтвердить</button>
                </form>
            }
        </div>
    );
};

export default CottageCreate;