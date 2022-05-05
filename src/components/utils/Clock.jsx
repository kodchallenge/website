import React, { useEffect, useState } from 'react'
import useTimer from '../../hooks/useTimer'

const Clock = ({date = "2022-05-02T11:27:18.590Z"}) => {
    // const {timer} = useTimer(parseInt(localStorage.getItem('timer') || 0))
    const [timer, setTimer] = useState(0)
    // useEffect(() => {
    //     if(timer % 5 == 0)
    // }, [timer])

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const diff = Math.round((new Date() - new Date(date)) / 1000)
            setTimer(diff)
        }, 1000)
        return () => clearInterval(timerInterval)
    }, [timer])


    return (
        <strong>
            {timer?.toClock()}
        </strong>
    )
}

export default React.memo(Clock)