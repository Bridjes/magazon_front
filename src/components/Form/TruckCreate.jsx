import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_trucks_fetch} from "../../store/truckReduser";
import {truck_brand, truck_capacity, truck_transmission, truck_type} from "../../utils/trucks";
import {car_state, car_year} from "../../utils/cars";

const TruckCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const [exchange, set_exchange] = useState(false)
    const [leasing, set_leasing] = useState(false)
    const [installment_plan, set_installment_plan] = useState(false)

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_trucks_fetch({data:data, setIsLoading:setIsLoading}))
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

                    <label htmlFor="brand">Марка</label>
                    <CategoriesDropdown categories={truck_brand}
                                        setValue={setValue}
                                        register={register}
                                        name="brand"
                    />

                    <label htmlFor="type">Тип грузовика</label>
                    <CategoriesDropdown categories={truck_type}
                                        setValue={setValue}
                                        register={register}
                                        name="type"
                    />

                    <label htmlFor="load_capacity">Грузоподъёмность</label>
                    <CategoriesDropdown categories={truck_capacity}
                                        setValue={setValue}
                                        register={register}
                                        name="load_capacity"
                    />

                    <label htmlFor="transmission">Коробка передач</label>
                    <CategoriesDropdown categories={truck_transmission}
                                        setValue={setValue}
                                        register={register}
                                        name="transmission"
                    />

                    <label htmlFor="year">Год</label>
                    <CategoriesDropdown categories={car_year}
                                        setValue={setValue}
                                        register={register}
                                        name="year"
                    />

                    <label htmlFor="mileage">Пробег*</label>
                    <input {...register("mileage")} id="mileage" type="number" />

                    <label htmlFor="state">Состояние*</label>
                    <CategoriesDropdown categories={car_state}
                                        setValue={setValue}
                                        register={register}
                                        name="state"
                    />

                    <label htmlFor="description">Описание</label>
                    <textarea {...register("description")} id="description" />

                    <label htmlFor="price">Цена</label>
                    <input {...register("price")} id="price" type="text" />

                    <label htmlFor="exchange">Возможен обмен</label>
                    <div className="checkbox">
                        <input {...register("exchange")}
                               id="exchange"
                               type="checkbox"
                               checked={exchange}
                               onChange={(event) =>
                                   set_exchange(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="leasing">Лизинг от продавца</label>
                    <div className="checkbox">
                        <input {...register("leasing")}
                               id="leasing"
                               type="checkbox"
                               checked={leasing}
                               onChange={(event) =>
                                   set_leasing(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="installment_plan">Готов(а) продать товар в рассрочку</label>
                    <div className="checkbox">
                        <input {...register("installment_plan")}
                               id="installment_plan"
                               type="checkbox"
                               checked={installment_plan}
                               onChange={(event) =>
                                   set_installment_plan(event.target.checked)}
                        />
                    </div>

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

export default TruckCreate;