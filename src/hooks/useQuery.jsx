const useQuery = (queryName=null) => {
    const params = new URLSearchParams(window.location.search)
    let value = null
    if(queryName) {
        value = params.get(queryName)
    }
    return [value, params]
}

export default useQuery