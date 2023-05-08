import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const LoadingToRedirect = () => {
    const [count, setCount] = useState(3)
    const history = useNavigate()


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        }, 1000)

        //redirect
        count === 0 && history('/')

        return ()=> clearInterval(interval)

    }, [count])

return (
    <div><h5>Check Permission redirect in ... {count}</h5></div>
)
}
export default LoadingToRedirect