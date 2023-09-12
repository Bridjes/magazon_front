import {useState} from "react";
export const useFatching = (callback) => {
    const [isLoadin, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fatching = async (formData) => {
        try {
            setIsLoading(true)
            await callback(formData)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fatching, isLoadin, error]
}