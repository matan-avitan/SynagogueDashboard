import {useEffect, useState} from "react";
import gematriya from "gematriya";

function Clock() {

    const [clockTime, setClockTime] = useState();


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockTime(date.toLocaleTimeString('en-GB'));
        }, 1000)
    }, [])




    return (

        <div>
            <span>
                <h1 className="clock hebrew">{clockTime}</h1>
            </span>


        </div>
    )

}

export default Clock