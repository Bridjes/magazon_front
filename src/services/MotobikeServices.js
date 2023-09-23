import $api from "../API";

export default class MotorbikeServices {
    static async load_motorbikes() {
        return await $api.get('v1/motorbike/retrieve/')
    }

    static async load_motorbikes_pk(pk) {
        return await $api.get(`v1/motorbike/retrieve/${pk}`)
    }

    static async create_motorbikes(data) {
        return await $api.post('v1/motorbike/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_motorbikes(data, pk) {
        return await $api.patch(`v1/motorbike/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}