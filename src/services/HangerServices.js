import $api from "../API";

export default class HangerServices {
    static async load_hangers() {
        return await $api.get('v1/hanger/retrieve/')
    }

    static async load_hangers_pk(pk) {
        return await $api.get(`v1/hanger/retrieve/${pk}`)
    }

    static async create_hangers(data) {
        return await $api.post('v1/hanger/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_hangers(data, pk) {
        return await $api.patch(`v1/hanger/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}