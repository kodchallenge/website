/*
@author: Yasin Torun
@description: Service must return promise
*/

import { useEffect, useState } from 'react'

const useService = (service, callback) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        service()
        .then(result => {
            setData(result.data?.data)
            callback && callback(result.data?.data)
        })
        .catch(err => {
            console.log(err)
            setError(err.response?.data.message ?? "Error occured")
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return [data, loading, error]
}

export default useService