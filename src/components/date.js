import {useEffect, useState} from "react";
import gematriya from "gematriya";
import hebrewDate from "hebrew-date";

function FullDate() {
    let hebrewDate = require("hebrew-date");
    let gematriya = require('gematriya')
    const [clockTime, setClockTime] = useState();
    const [hebMonthDate, setMonthDate] = useState();
    const [hebDayDate, setDayDate] = useState();
    const [hebYearDate, setYearDate] = useState();


    const convertEnglishMonthToHebrew = (englishMonth) => {
        switch (englishMonth) {
            case 'Tishri':
                return 'תשרי'
            case 'Cheshvan':
                return 'חשוון'
            case 'Kislev':
                return 'כסלו'
            case 'Tevet':
                return 'טבת'
            case 'Shevat':
                return 'שבט'
            case 'Adar':
                return 'אדר'
            case 'Nisan':
                return 'ניסן'
            case 'Iyar':
                return 'אייר'
            case 'Sivan':
                return 'סיוון'
            case 'Tammuz':
                return 'תמוז'
            case 'Av':
                return 'אב'
            case 'Elul':
                return 'אלול'
        }
    }

    useEffect(() => {
        setInterval(() => {
            const myDate = new Date()
            const month = myDate.getMonth()
            const year = myDate.getFullYear()
            const day = myDate.getDay()
            const hDate = hebrewDate(year, month, day)
            console.log(month)
            console.log(year)
            console.log(day)
            console.log(hDate)
            setMonthDate(hDate.month_name);
            setDayDate(hDate.date);
            setYearDate(hDate.year);
        }, 1000)
    }, [])


    return (

        <div>
            <h1 className="clock">{clockTime}</h1>
            <div dir='rtl'>

            </div>
            <h3 className=' hebrew'>{gematriya(parseInt(hebDayDate))} ב{convertEnglishMonthToHebrew(hebMonthDate)} {gematriya(parseInt(hebYearDate))}</h3>
        </div>
    )

}


export default FullDate