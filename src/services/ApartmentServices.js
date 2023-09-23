import $api from "../API";

export default class ApartmentServices {
    static async load_apartments() {
        return await $api.get('v1/apartment/retrieve/')
    }

    static async load_apartments_pk(pk) {
        return await $api.get(`v1/apartment/retrieve/${pk}`)
    }

    static async create_apartments(data) {
        return await $api.post('v1/apartment/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_apartments(data, pk) {
        return await $api.patch(`v1/apartment/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}