import $api from "../API";

export default class GarageServices {
    static async load_garages() {
        return await $api.get('v1/garage/retrieve/')
    }

    static async load_garages_pk(pk) {
        return await $api.get(`v1/garage/retrieve/${pk}`)
    }

    static async create_garages(data) {
        return await $api.post('v1/garage/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_garages(data, pk) {
        return await $api.patch(`v1/garage/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}