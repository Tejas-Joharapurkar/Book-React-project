import React, { useEffect } from 'react';
import '../css/index.css'

const Alert = ({ msg, type, closealert, cart }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            closealert()
        }, 3000)
        return () => clearTimeout(timeout);
    }, [closealert, cart])

    return (
        <div className="overlay-alert">
            <div className={`alert ${type}`}>{msg}</div>
        </div>
    )

}
export default Alert;