import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyLoader from "../UI/Loader/MyLoader";
import CategoriesSubcategoriesDropdowns from "../Dropdown/CategoriesSubcategoriesDropdowns";
import { useForm } from "react-hook-form";
import CategoriesDropdown from "../Dropdown/CategoriesDropdown";
import {locations} from "../../utils/locations";
import classes from "./CarCreate.component.css"
import {create_headphones_fetch} from "../../store/headphonesReduser";
import {audio_state} from "../../utils/audio";
import {
    headphones_brand,
    headphones_connector,
    headphones_fastening,
    headphones_purpose,
    headphones_type
} from "../../utils/headphones";

const HeadphonesCreate = () => {
    const dispatcher = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { register, setValue, handleSubmit } = useForm()

    const [wireless, set_wireless] = useState(false)
    const [noise_reduction, set_noise_reduction] = useState(false)
    const [surround_sound, set_surround_sound] = useState(false)
    const [folding, set_folding] = useState(false)
    const [volume_control, set_volume_control] = useState(false)
    const [protection, set_protection] = useState(false)
    const [microphone, set_microphone] = useState(false)
    const [NFC, set_NFC] = useState(false)
    const [exchange, set_exchange] = useState(false)
    const [installment_plan, set_installment_plan] = useState(false)

    const onSubmit = (data) => {
        data.photo = data.photo[0]
        dispatcher(create_headphones_fetch({data:data, setIsLoading:setIsLoading}))
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

                    <label htmlFor="type">Тип</label>
                    <CategoriesDropdown categories={headphones_type}
                                        setValue={setValue}
                                        register={register}
                                        name="type"
                    />

                    <label htmlFor="wireless">Беспроводные</label>
                    <div className="checkbox">
                        <input {...register("wireless")}
                               id="wireless"
                               type="checkbox"
                               checked={wireless}
                               onChange={(event) =>
                                   set_wireless(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="brand">Производитель</label>
                    <CategoriesDropdown categories={headphones_brand}
                                        setValue={setValue}
                                        register={register}
                                        name="brand"
                    />

                    <label htmlFor="connector">Тип разъёма</label>
                    <CategoriesDropdown categories={headphones_connector}
                                        setValue={setValue}
                                        register={register}
                                        name="connector"
                    />

                    <label htmlFor="purpose">Назначение</label>
                    <CategoriesDropdown categories={headphones_purpose}
                                        setValue={setValue}
                                        register={register}
                                        name="purpose"
                    />

                    <label htmlFor="fastening">Крепление</label>
                    <CategoriesDropdown categories={headphones_fastening}
                                        setValue={setValue}
                                        register={register}
                                        name="fastening"
                    />

                    <label htmlFor="noise_reduction">Активное шумоподавление</label>
                    <div className="checkbox">
                        <input {...register("noise_reduction")}
                               id="noise_reduction"
                               type="checkbox"
                               checked={noise_reduction}
                               onChange={(event) =>
                                   set_noise_reduction(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="surround_sound">Объёмное звучание</label>
                    <div className="checkbox">
                        <input {...register("surround_sound")}
                               id="surround_sound"
                               type="checkbox"
                               checked={surround_sound}
                               onChange={(event) =>
                                   set_surround_sound(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="folding">Возможность складывания</label>
                    <div className="checkbox">
                        <input {...register("folding")}
                               id="folding"
                               type="checkbox"
                               checked={folding}
                               onChange={(event) =>
                                   set_folding(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="volume_control">Регулировка громкости</label>
                    <div className="checkbox">
                        <input {...register("volume_control")}
                               id="volume_control"
                               type="checkbox"
                               checked={volume_control}
                               onChange={(event) =>
                                   set_volume_control(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="protection">Пыле- и влагозащита</label>
                    <div className="checkbox">
                        <input {...register("protection")}
                               id="protection"
                               type="checkbox"
                               checked={protection}
                               onChange={(event) =>
                                   set_protection(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="microphone">Микрофон</label>
                    <div className="checkbox">
                        <input {...register("microphone")}
                               id="microphone"
                               type="checkbox"
                               checked={microphone}
                               onChange={(event) =>
                                   set_microphone(event.target.checked)}
                        />
                    </div>

                    <label htmlFor="NFC">NFC</label>
                    <div className="checkbox">
                        <input {...register("NFC")}
                               id="NFC"
                               type="checkbox"
                               checked={NFC}
                               onChange={(event) =>
                                   set_NFC(event.target.checked)}
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

export default HeadphonesCreate;