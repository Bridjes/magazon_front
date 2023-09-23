import $api from "../API";

export default class VideoEquipmentServices {
    static async load_video_equipment() {
        return await $api.get('v1/video_equipment/retrieve/')
    }

    static async load_video_equipment_pk(pk) {
        return await $api.get(`v1/video_equipment/retrieve/${pk}`)
    }

    static async create_video_equipment(data) {
        return await $api.post('v1/video_equipment/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_video_equipment(data, pk) {
        return await $api.patch(`v1/video_equipment/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}