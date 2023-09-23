import $api from "../API";

export default class HeadphonesServices {
    static async load_headphones() {
        return await $api.get('v1/headphones/retrieve/')
    }

    static async load_headphones_pk(pk) {
        return await $api.get(`v1/headphones/retrieve/${pk}`)
    }

    static async create_headphones(data) {
        return await $api.post('v1/headphones/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_headphones(data, pk) {
        return await $api.patch(`v1/headphones/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}