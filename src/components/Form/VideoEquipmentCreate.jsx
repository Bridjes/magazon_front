import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_vido_equipments_fetch} from "../../store/videoEquipmentReduser";
import {audio_state} from "../../utils/audio";
import {video_equipment_type_brand} from "../../utils/video_equipment";

const VideoEquipmentCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const [exchange, set_exchange] = useState(false)
    const [installment_plan, set_installment_plan] = useState(false)

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_vido_equipments_fetch({data:data, setIsLoading:setIsLoading}))
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

                    <div className="categories-sub">
                        <CategoriesSubcategoriesDropdowns categories={video_equipment_type_brand}
                                                          register={register}
                                                          setValue={setValue}
                                                          name="type"
                                                          subname="manufacturer"
                                                          title="Тип"
                                                          subtitle="Производитель"
                        />
                    </div>

                    <label htmlFor="state">Состояние</label>
                    <CategoriesDropdown categories={audio_state}
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

export default VideoEquipmentCreate;