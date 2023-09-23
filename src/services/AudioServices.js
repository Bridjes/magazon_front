import $api from "../API";

export default class AudioServices {
    static async load_audio() {
        return await $api.get('v1/audio/retrieve/')
    }

    static async load_audio_pk(pk) {
        return await $api.get(`v1/audio/retrieve/${pk}`)
    }

    static async create_audio(data) {
        return await $api.post('v1/audio/create/',
            {...data},
            {
                withCredentials: true,
                headers: {"Content-Type": "multipart/form-data"}
            })
    }

    static async update_audio(data, pk) {
        return await $api.patch(`v1/audio/update/${pk}`,
            {...data},
            {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}})
    }
}