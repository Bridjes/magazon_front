import $api from "../API";

export default class OttomansServices {
    static async load_ottomans() {
        return await $api.get('v1/ottomans/retrieve/')
    }

    static async load_ottomans_pk(pk) {
        return await $api.get(`v1/ottomans/retrieve/${pk}`)
    }

    static async create_ottomans(data) {
        return await $api.post('v1/ottomans/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_ottomans(data, pk) {
        return await $api.patch(`v1/ottomans/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}