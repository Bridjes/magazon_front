import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_motobike_fetch} from "../../store/motobikeReduser";
import {
    motobike_brand,
    motobike_drive_unit,
    motobike_nuber_cycles,
    motobike_nuber_cylinders,
    motobike_type, motobike_volume
} from "../../utils/motobikes";
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
        dispatcher(create_motobike_fetch({data:data, setIsLoading:setIsLoading}))
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
                    <CategoriesDropdown categories={motobike_brand}
                                        setValue={setValue}
                                        register={register}
                                        name="brand"
                    />

                    <label htmlFor="type">Тип</label>
                    <CategoriesDropdown categories={motobike_type}
                                        setValue={setValue}
                                        register={register}
                                        name="type"
                    />

                    <label htmlFor="dive_unit">Привод</label>
                    <CategoriesDropdown categories={motobike_drive_unit}
                                        setValue={setValue}
                                        register={register}
                                        name="dive_unit"
                    />

                    <label htmlFor="number_cycles">Количество тактов</label>
                    <CategoriesDropdown categories={motobike_nuber_cycles}
                                        setValue={setValue}
                                        register={register}
                                        name="number_cycles"
                    />

                    <label htmlFor="number_cylinders">Количество цилиндров</label>
                    <CategoriesDropdown categories={motobike_nuber_cylinders}
                                        setValue={setValue}
                                        register={register}
                                        name="number_cylinders"
                    />

                    <label htmlFor="number_volume">Объём, см³</label>
                    <CategoriesDropdown categories={motobike_volume}
                                        setValue={setValue}
                                        register={register}
                                        name="number_volume"
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