import {Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";


export default function Shabat({currentShabat}) {
    const [shabatStart, setShabatStart] = useState('')
    const [shabatEnd, setShabatEnd] = useState('')

    useEffect(() => {
        console.log(currentShabat)
        setShabatStart(currentShabat.shabatStart ? currentShabat.shabatStart : '')
        setShabatEnd(currentShabat.shabatEnd ? currentShabat.shabatEnd : '')
    }, [currentShabat])
    console.log(shabatStart)
    console.log(shabatEnd)

    return (
        <Card className="card-row-1">
            <Card.Title className=' hebrew'>

                זמני כניסת השבת/חג
            </Card.Title>
            <Card.Text dir='rtl' className=' hebrew'>
                <br/>
                <h3>תאריך: {currentShabat.hebDate}</h3>
                <br/>
                <h3>פרשה: {currentShabat.parasha}</h3>
                <br/>
                <h3>כניסה: {currentShabat.shabatStart}</h3>
                <br/>
                <h3>יציאה: {currentShabat.shabatEnd}</h3>
                <br/>

            </Card.Text>
        </Card>
    )

}
