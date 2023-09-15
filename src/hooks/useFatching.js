import {useState} from "react";
export const useFatching = (callback) => {
    const [isLoadin, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fatching = async (formData =null, pk=null) => {
        try {
            setIsLoading(true)
            if (formData && pk) {
                await callback(formData, pk)
            }
            else if (formData) {
                await callback(formData)
            }
            else {
                await callback()
            }
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fatching, isLoadin, error]
}