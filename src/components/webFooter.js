import {Card} from "react-bootstrap";
import React from "react";
import "./style.css"

export default function WebFooter() {
    return (
        <Card className="web-footer">
            <Card.Title dir="rtl" className='hebrew deceased-name'>
                מוקדש לעילוי נשמת שלום אביטן ז"ל נבל"ע כ"ד בשבט תשע"ח ת.נ.צ.ב.ה
            </Card.Title>
            <Card.Title  dir="rtl" className='hebrew deceased-name'>
                מוקדש לעילוי נשמת אברהם גפני בן יוסף וחממה ז"ל נבל"ע כ' בסיון תשע"ז ת.נ.צ.ב.ה
            </Card.Title>

        </Card>
    )

}
