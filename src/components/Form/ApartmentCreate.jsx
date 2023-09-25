import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_apartment_fetch} from "../../store/apartmentReduser";
import {
    apartment_ceiling_height,
    apartment_deal_type,
    apartment_floors,
    apartment_layout,
    apartment_rooms, apartment_salesman, apartment_wall_material
} from "../../utils/apartment";

const ApartmentCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_apartment_fetch({data:data, setIsLoading:setIsLoading}))
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
                    <label htmlFor="title">Название товара/услуги</label>
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

                    <label htmlFor="rooms">Количество комнат</label>
                    <CategoriesDropdown categories={apartment_rooms}
                                        setValue={setValue}
                                        register={register}
                                        name="rooms"
                    />

                    <label htmlFor="layout">Вид планировки</label>
                    <CategoriesDropdown categories={apartment_layout}
                                        setValue={setValue}
                                        register={register}
                                        name="layout"
                    />

                    <label htmlFor="floors">Этажность</label>
                    <CategoriesDropdown categories={apartment_floors}
                                        setValue={setValue}
                                        register={register}
                                        name="floors"
                    />

                    <label htmlFor="ceiling_height">Высота потолков</label>
                    <CategoriesDropdown categories={apartment_ceiling_height}
                                        setValue={setValue}
                                        register={register}
                                        name="ceiling_height"
                    />

                    <label htmlFor="wall_material">Материал стен</label>
                    <CategoriesDropdown categories={apartment_wall_material}
                                        setValue={setValue}
                                        register={register}
                                        name="wall_material"
                    />

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

export default ApartmentCreate;