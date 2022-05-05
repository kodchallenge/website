import React, { useEffect, useState } from 'react'

const useTimer = (start=0) => {
    const [timer, setTimer] = useState(start)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1)
            if(timer % 10 === 0) {
                localStorage.setItem('timer', timer)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    return {timer}
}

export default useTimer