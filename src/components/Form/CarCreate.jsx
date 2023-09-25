import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import {create_car_fetch} from "../../store/carReduser";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import {
    car_body_type,
    car_brand_model,
    car_color,
    car_drive_unit,
    car_engine_type, car_engine_volume, car_state,
    car_transmission, car_year
} from "../../utils/cars";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"

const CarCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const [air_conditioner, set_air_conditioner] = useState(false)
    const [seat_heating, set_seat_heating] = useState(false)
    const [abs_esp_asr, set_abs_esp_asr] = useState(false)
    const [regular_navigation, set_regular_navigation] = useState(false)
    const [alloy_wheels, set_alloy_wheels] = useState(false)
    const [parctronic_camera, set_parctronic_camera] = useState(false)
    const [sunroof, set_sunroof] = useState(false)
    const [theft_protection, set_theft_protection] = useState(false)
    const [xenon, set_xenon] = useState(false)
    const [cruise_control, set_cruise_control] = useState(false)
    const [aux_usb_bluetooth, set_aux_usb_bluetooth] = useState(false)
    const [exchange, set_exchange] = useState(false)
    const [leasing, set_leasing] = useState(false)
    const [installment_plan, set_installment_plan] = useState(false)

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_car_fetch({data:data, setIsLoading:setIsLoading}))
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
                        <CategoriesSubcategoriesDropdowns categories={car_brand_model}
                                                          register={register}
                                                          setValue={setValue}
                                                          name="brand"
                                                          subname="model"
                                                          title="Марка"
                                                          subtitle="Модель"
                        />
                    </div>

                    <label htmlFor="body_type">Тип кузова*</label>
                    <CategoriesDropdown categories={car_body_type}
                                        setValue={setValue}
                                        register={register}
                                        name="body_type"
                    />

                    <label htmlFor="color">Цвет</label>
                    <CategoriesDropdown categories={car_color}
                                        setValue={setValue}
                                        register={register}
                                        name="color"
                    />

                    <label htmlFor="engine_type">Тип двигателя</label>
                    <CategoriesDropdown categories={car_engine_type}
                                        setValue={setValue}
                                        register={register}
                                        name="engine_type"
                    />

                    <label htmlFor="drive_unit">Привод</label>
                    <CategoriesDropdown categories={car_drive_unit}
                                        setValue={setValue}
                                        register={register}
                                        name="drive_unit"
                    />

                    <label htmlFor="transmission">Коробка передач</label>
                    <CategoriesDropdown categories={car_transmission}
                                        setValue={setValue}
                                        register={register}
                                        name="transmission"
                    />

                    <label htmlFor="engine_volume">Объем, л</label>
                    <CategoriesDropdown categories={car_engine_volume}
                                        setValue={setValue}
                                        register={register}
                                        name="engine_volume"
                    />

                    <label htmlFor="year">Год</label>
                    <CategoriesDropdown categories={car_year}
                                        setValue={setValue}
                                        register={register}
                                        name="year"
                    />

                    <label htmlFor="mileage">Пробег*</label>
                    <input {...register("mileage")} id="mileage" type="number" />

                    <label htmlFor="air_conditioner">Кондиционер / климат-контроль</label>
                    <div className="checkbox">
                        <input {...register("air_conditioner")}
                               id="air_conditioner"
                               type="checkbox"
                               checked={air_conditioner}
                               onChange={(event) =>
                                   set_air_conditioner(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="seat_heating">Обогрев сидений</label>
                    <div className="checkbox">
                        <input {...register("seat_heating")}
                               id="seat_heating"
                               type="checkbox"
                               checked={seat_heating}
                               onChange={(event) =>
                                   set_seat_heating(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="abs_esp_asr">ABS/ESP/ASR</label>
                    <div className="checkbox">
                        <input {...register("abs_esp_asr")}
                               id="abs_esp_asr"
                               type="checkbox"
                               checked={abs_esp_asr}
                               onChange={(event) =>
                                   set_abs_esp_asr(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="regular_navigation">Штатная навигация</label>
                    <div className="checkbox">
                        <input {...register("regular_navigation")}
                               id="regular_navigation"
                               type="checkbox"
                               checked={regular_navigation}
                               onChange={(event) =>
                                   set_regular_navigation(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="alloy_wheels">Легкосплавные диски</label>
                    <div className="checkbox">
                        <input {...register("alloy_wheels")}
                               id="alloy_wheels"
                               type="checkbox"
                               checked={alloy_wheels}
                               onChange={(event) =>
                                   set_alloy_wheels(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="parctronic_camera">Парктроник / камера</label>
                    <div className="checkbox">
                        <input {...register("parctronic_camera")}
                               id="parctronic_camera"
                               type="checkbox"
                               checked={parctronic_camera}
                               onChange={(event) =>
                                   set_parctronic_camera(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="sunroof">Люк / панорамная крыша</label>
                    <div className="checkbox">
                        <input {...register("sunroof")}
                               id="sunroof"
                               type="checkbox"
                               checked={sunroof}
                               onChange={(event) =>
                                   set_sunroof(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="theft_protection">Защита от угона</label>
                    <div className="checkbox">
                        <input {...register("theft_protection")}
                               id="theft_protection"
                               type="checkbox"
                               checked={theft_protection}
                               onChange={(event) =>
                                   set_theft_protection(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="xenon">Ксенон / биксенон</label>
                    <div className="checkbox">
                        <input {...register("xenon")}
                               id="xenon"
                               type="checkbox"
                               checked={xenon}
                               onChange={(event) =>
                                   set_xenon(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="cruise_control">Круиз-контроль</label>
                    <div className="checkbox">
                        <input {...register("cruise_control")}
                               id="cruise_control"
                               type="checkbox"
                               checked={cruise_control}
                               onChange={(event) =>
                                   set_cruise_control(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="aux_usb_bluetooth">AUX/USB/Bluetooth</label>
                    <div className="checkbox">
                        <input {...register("aux_usb_bluetooth")}
                               id="aux_usb_bluetooth"
                               type="checkbox"
                               checked={aux_usb_bluetooth}
                               onChange={(event) =>
                                   set_aux_usb_bluetooth(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="state">Состояние*</label>
                    <CategoriesDropdown categories={car_state}
                                        setValue={setValue}
                                        register={register}
                                        name="state"
                    />

                    <label htmlFor="vin">Номер VIN</label>
                    <input {...register("vin")} id="vin" type="text" />

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

export default CarCreate;