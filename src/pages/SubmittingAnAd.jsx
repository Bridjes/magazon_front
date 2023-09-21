import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../components/UI/Loader/MyLoader";
import {create_car_fetch} from "../store/carReduser";
import CategoriesSubcategoriesDropdowns from "../components/CategoriesSubcategoriesDropdowns";
import {
    car_body_type,
    car_brand_model,
    car_color,
    car_drive_unit,
    car_engine_type, car_engine_volume, car_state,
    car_transmission, car_year
} from "../utils/cars";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../components/CategoriesDropdown";
import {locations} from "../utils/locations";

const SubmittingAnAd = () => {
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
                ? <div className={"loader-box"}>
                    <MyLoader/>
                </div>
                : <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Название товара/услуги*</label>
                    <input {...register("title")} id="title" type="text" />

                    <label htmlFor="photo">Фото</label>
                    <input {...register("photo")} id="photo" type="file" />

                    <CategoriesSubcategoriesDropdowns categories={car_brand_model}
                                                      register={register}
                                                      setValue={setValue}
                                                      name="brand"
                                                      subname="model"
                                                      title="Марка"
                                                      subtitle="Модель"
                    />

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

                    <label htmlFor="air_conditioner">Air Conditioner</label>
                    <input {...register("air_conditioner")}
                           id="air_conditioner"
                           type="checkbox"
                           checked={air_conditioner}
                           onChange={(event) =>
                               set_air_conditioner(event.target.checked)}
                    />

                    <label htmlFor="seat_heating">Seat Heating</label>
                    <input {...register("seat_heating")}
                           id="seat_heating"
                           type="checkbox"
                           checked={seat_heating}
                           onChange={(event) =>
                               set_seat_heating(event.target.checked)}
                    />

                    <label htmlFor="abs_esp_asr">ABS/ESP/ASR</label>
                    <input {...register("abs_esp_asr")}
                           id="abs_esp_asr"
                           type="checkbox"
                           checked={abs_esp_asr}
                           onChange={(event) =>
                               set_abs_esp_asr(event.target.checked)}
                    />

                    <label htmlFor="regular_navigation">Regular Navigation</label>
                    <input {...register("regular_navigation")}
                           id="regular_navigation"
                           type="checkbox"
                           checked={regular_navigation}
                           onChange={(event) =>
                               set_regular_navigation(event.target.checked)}
                    />

                    <label htmlFor="alloy_wheels">Alloy Wheels</label>
                    <input {...register("alloy_wheels")}
                           id="alloy_wheels"
                           type="checkbox"
                           checked={alloy_wheels}
                           onChange={(event) =>
                               set_alloy_wheels(event.target.checked)}
                    />

                    <label htmlFor="parctronic_camera">Parctronic Camera</label>
                    <input {...register("parctronic_camera")}
                           id="parctronic_camera"
                           type="checkbox"
                           checked={parctronic_camera}
                           onChange={(event) =>
                               set_parctronic_camera(event.target.checked)}
                    />

                    <label htmlFor="sunroof">Sunroof</label>
                    <input {...register("sunroof")}
                           id="sunroof"
                           type="checkbox"
                           checked={sunroof}
                           onChange={(event) =>
                               set_sunroof(event.target.checked)}
                    />

                    <label htmlFor="theft_protection">Theft Protection</label>
                    <input {...register("theft_protection")}
                           id="theft_protection"
                           type="checkbox"
                           checked={theft_protection}
                           onChange={(event) =>
                               set_theft_protection(event.target.checked)}
                    />

                    <label htmlFor="xenon">Xenon</label>
                    <input {...register("xenon")}
                           id="xenon"
                           type="checkbox"
                           checked={xenon}
                           onChange={(event) =>
                               set_xenon(event.target.checked)}
                    />

                    <label htmlFor="cruise_control">Cruise Control</label>
                    <input {...register("cruise_control")}
                           id="cruise_control"
                           type="checkbox"
                           checked={cruise_control}
                           onChange={(event) =>
                               set_cruise_control(event.target.checked)}
                    />

                    <label htmlFor="aux_usb_bluetooth">AUX/USB/Bluetooth</label>
                    <input {...register("aux_usb_bluetooth")}
                           id="aux_usb_bluetooth"
                           type="checkbox"
                           checked={aux_usb_bluetooth}
                           onChange={(event) =>
                               set_aux_usb_bluetooth(event.target.checked)}
                    />

                    <label htmlFor="state">Состояние*</label>
                    <CategoriesDropdown categories={car_state}
                                        setValue={setValue}
                                        register={register}
                                        name="state"
                    />

                    <label htmlFor="vin">VIN</label>
                    <input {...register("vin")} id="vin" type="text" />

                    <label htmlFor="description">Description</label>
                    <textarea {...register("description")} id="description" />

                    <label htmlFor="price">Price</label>
                    <input {...register("price")} id="price" type="text" />

                    <label htmlFor="exchange">Exchange</label>
                    <input {...register("exchange")}
                           id="exchange"
                           type="checkbox"
                           checked={exchange}
                           onChange={(event) =>
                               set_exchange(event.target.checked)}
                    />

                    <label htmlFor="leasing">Leasing</label>
                    <input {...register("leasing")}
                           id="leasing"
                           type="checkbox"
                           checked={leasing}
                           onChange={(event) =>
                               set_leasing(event.target.checked)}
                    />

                    <label htmlFor="installment_plan">Installment Plan</label>
                    <input {...register("installment_plan")}
                           id="installment_plan"
                           type="checkbox"
                           checked={installment_plan}
                           onChange={(event) =>
                               set_installment_plan(event.target.checked)}
                    />

                    <CategoriesSubcategoriesDropdowns categories={locations}
                                                      register={register}
                                                      setValue={setValue}
                                                      name="region"
                                                      subname="city"
                                                      title="Область*"
                                                      subtitle="Город / Район"
                    />

                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    );
};

export default SubmittingAnAd;