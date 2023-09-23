import $api from "../API";

export default class CarServices {
    static async load_cars() {
        return await $api.get('v1/cars/retrieve/')
    }

    static async load_cars_pk(pk) {
        return await $api.get(`v1/cars/retrieve/${pk}`)
    }

    static async create_car(data) {
        return await $api.post('v1/cars/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_car(data, pk) {
        return await $api.patch(`v1/cars/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}