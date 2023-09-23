import $api from "../API";

export default class DresserServices {
    static async load_dressers() {
        return await $api.get('v1/dresser/retrieve/')
    }

    static async load_dressers_pk(pk) {
        return await $api.get(`v1/dresser/retrieve/${pk}`)
    }

    static async create_dressers(data) {
        return await $api.post('v1/dresser/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_dressers(data, pk) {
        return await $api.patch(`v1/dresser/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}