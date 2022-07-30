import {useEffect, useState} from "react";

function Clock() {
    let hebrewDate = require("hebrew-date");
    const [clockTime, setClockTime] = useState();
    const [hebMonthDate, setMonthDate] = useState();
    const [hebDayDate, setDayDate] = useState();
    const [hebYearDate, setYearDate] = useState();


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockTime(date.toLocaleTimeString());
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            const hDate = hebrewDate(new Date())
            setMonthDate(hDate.month_name);
            setDayDate(hDate.date);
            setYearDate(hDate.year);
        }, 1000)
    }, [])
    return (

        <div>
            <h3>{clockTime}</h3>
            <h3>{hebDayDate} - {hebMonthDate} - {hebYearDate}</h3>
        </div>
    )

}

export default Clock