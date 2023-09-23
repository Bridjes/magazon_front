import $api from "../API";

export default class TruckServices {
    static async load_trucks() {
        return await $api.get('v1/truck/retrieve/')
    }

    static async load_trucks_pk(pk) {
        return await $api.get(`v1/truck/retrieve/${pk}`)
    }

    static async create_trucks(data) {
        return await $api.post('v1/truck/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_trucks(data, pk) {
        return await $api.patch(`v1/truck/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}