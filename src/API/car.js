import axios from "axios";


export default class FetchCreateCar {
    static async create_car(formDate) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NDM4ODUxLCJpYXQiOjE2OTQ0MzYxNTEsImp0aSI6IjdjMDk2YmY0MTY2YzQyYjhiZTUxYWE4ZTJkNmI4NTA4IiwidXNlcl9pZCI6Mn0.lXZSjfHi2CVpl2jkcqJBtDgKwxswXBKSgigLbmnekmE"

        const data = {
            title: "Проверочная запись",
            brand: "1",
            model: "1",
            body_type: "Седан",
            color: "Белый",
            engine_type: "Бензин",
            drive_unit: "Задний",
            transmission: "Механика",
            engine_volume: "1.6 л",
            year: "2017",
            mileage: "1500",
            xenon: "false",
            air_conditioner: "true",
            seat_heating: "false",
            abs_esp_asr: "false",
            regular_navigation: "false",
            alloy_wheels: "false",
            parctronic_camera: "false",
            sunroof: "false",
            theft_protection: "false",
            cruise_control: "false",
            aux_usb_bluetooth: "false",
            state: "С пробегом",
            vin: "weijglwjegoiwieg3982fkoifj3o43g",
            description: "Тачилла - просто ахуенная",
            price: 10000,
            exchange: "false",
            leasing: "false",
            installment_plan: "false",
            city: "Гродно"
        }

        const options = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Host": "127.0.0.1:8000"
            }
        }
        const response = await axios.post("http://127.0.0.1:8000/v1/cars/create/", data, options)
        return response.data
    }
    static async create_car2() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NDM4ODUxLCJpYXQiOjE2OTQ0MzYxNTEsImp0aSI6IjdjMDk2YmY0MTY2YzQyYjhiZTUxYWE4ZTJkNmI4NTA4IiwidXNlcl9pZCI6Mn0.lXZSjfHi2CVpl2jkcqJBtDgKwxswXBKSgigLbmnekmE"

        const data = {
            title: "Проверочная запись",
            brand: "1",
            model: "1",
            body_type: "Седан",
            color: "Белый",
            engine_type: "Бензин",
            drive_unit: "Задний",
            transmission: "Механика",
            engine_volume: "1.6 л",
            year: "2017",
            mileage: "1500",
            xenon: "false",
            air_conditioner: "true",
            seat_heating: "false",
            abs_esp_asr: "false",
            regular_navigation: "false",
            alloy_wheels: "false",
            parctronic_camera: "false",
            sunroof: "false",
            theft_protection: "false",
            cruise_control: "false",
            aux_usb_bluetooth: "false",
            state: "С пробегом",
            vin: "weijglwjegoiwieg3982fkoifj3o43g",
            description: "Тачилла - просто ахуенная",
            price: 10000,
            exchange: "false",
            leasing: "false",
            installment_plan: "false",
            city: "Гродно"
        }

        const options = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Host": "127.0.0.1:8000"
            }
        }
        const response = await axios.post("http://127.0.0.1:8000/v1/cars/create/", data, options)
        return response.data
    }

    static async update_car(formData) {
        console.log(formData)
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NTA3MzA3LCJpYXQiOjE2OTQ1MDQ2MDcsImp0aSI6IjU4YjJhMjJmZTc1YjRhZWViOGFlOGZmNmQ1OTk4NzUyIiwidXNlcl9pZCI6Mn0.VKTRFAC-n87ytea_P8vrqbTo7gf7VgsdFSn8ruUsX9k"
        const response = await axios.patch("http://127.0.0.1:8000/v1/cars/update/2", formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }

    static async update_car2() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NDM2NzgzLCJpYXQiOjE2OTQ0MzQwODMsImp0aSI6ImVlODJmZjBkZjQzZjQ5ZWVhNWQ1ZTBiNTY5NjU4YTZjIiwidXNlcl9pZCI6Mn0.zmzc2v5of63boBsnWKo7elkEi0DWYRFGFaMG-cctyx8"

        const response = await axios.patch("http://127.0.0.1:8000/v1/cars/update/2", {
            title: 'Зверюга'
        }, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "multipart/form-data"
            }
        })
        return response.data
    }
}