import $api from "../API";

export default class CottageServices {
    static async load_cottages() {
        return await $api.get('v1/cottage/retrieve/')
    }

    static async load_cottages_pk(pk) {
        return await $api.get(`v1/cottage/retrieve/${pk}`)
    }

    static async create_cottages(data) {
        return await $api.post('v1/cottage/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_cottages(data, pk) {
        return await $api.patch(`v1/cottage/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}