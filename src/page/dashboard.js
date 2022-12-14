import React, {useEffect, useState} from "react";
import Clock from "../components/Clock";
import {Card, Col, Row} from "react-bootstrap";
import DashboardTitle from "../components/dashboardTitle";
import PrayTime from "../components/prayTime";
import Messages from "../components/messages";
import Shabat from "../components/shabat";
import WebFooter from "../components/webFooter";
import Deceased from "../components/deceased";

import {shabatTimesData} from "../data/shabatTimesData";


function Dashboard() {
    const [shabatData, setShabatData] = useState([])
    const [currentShabat, setCurrentShabat] = useState({
        hebDate: "",
        date: "",
        parasha: "",
        shabatStart: "",
        shabatEnd: ""
    })

    function isBefore(date1, date2) {
        const endOfDate2 = new Date(date2);
        endOfDate2.setDate(endOfDate2.getDate() + 1)
        return date1 <= endOfDate2
    }

    useEffect(() => {
        let shabatDataUpdated = []
        shabatTimesData.forEach((shabat) => {
            const hebDate = shabat.hebDate;
            const parasha = shabat.parasha;
            const shabatStart = shabat.shabatStart;
            const shabatEnd = shabat.shabatEnd;
            const shabatDates = shabat.dates;
            const reOp1 = /^\d+-\d+\/\d+\/\d+/;
            const reOp2 = /^\d+\/\d+-\d+\/\d+\/\d+/;
            const reOp3 = /^\d+\/\d+\/\d+-\d+\/\d+\/\d+/;
            if (reOp1.exec(shabatDates)) {
                const day1 = parseInt(shabatDates.match(/\d+-\d+/)[0].split('-')[0])
                const dates = shabatDates.split('-')[1].split('/')
                const day2 = parseInt(dates[0])
                const monthIndex = parseInt(dates[1]) - 1
                const year = parseInt(dates[2])
                for (let day = day1; day <= day2; day++) {
                    shabatDataUpdated.push({
                        hebDate: hebDate,
                        parasha: parasha,
                        shabatStart: shabatStart,
                        shabatEnd: shabatEnd,
                        date: new Date(year, monthIndex, day)
                    })
                }
            } else if (reOp2.exec(shabatDates)) {
                const fullDates = shabatDates.split('-')

                const day1 = parseInt(fullDates[0].split('/')[0])
                const monthIndex1 = parseInt(fullDates[0].split('/')[1]) - 1


                const dates = fullDates[1].split('/')
                const day2 = parseInt(dates[0])
                const monthIndex2 = parseInt(dates[1]) - 1
                const year = parseInt(dates[2])
                shabatDataUpdated.push({
                    hebDate: hebDate,
                    parasha: parasha,
                    shabatStart: shabatStart,
                    shabatEnd: shabatEnd,
                    date: new Date(year, monthIndex1, day1)
                })
                shabatDataUpdated.push({
                    hebDate: hebDate,
                    parasha: parasha,
                    shabatStart: shabatStart,
                    shabatEnd: shabatEnd,
                    date: new Date(year, monthIndex2, day2)
                })
            } else if (reOp3.exec(shabatDates)) {
                let dates = shabatDates.split('-')[0].split('/')
                const day1 = parseInt(dates[0])
                const monthIndex1 = parseInt(dates[1]) - 1
                const year1 = parseInt(dates[2])
                shabatDataUpdated.push({
                    hebDate: hebDate,
                    parasha: parasha,
                    shabatStart: shabatStart,
                    shabatEnd: shabatEnd,
                    date: new Date(year1, monthIndex1, day1),
                    dateString: dates
                })
                dates = shabatDates.split('-')[1].split('/')
                const day2 = parseInt(dates[0])
                const monthIndex2 = parseInt(dates[1]) - 1
                const year2 = parseInt(dates[2])
                shabatDataUpdated.push({
                    hebDate: hebDate,
                    parasha: parasha,
                    shabatStart: shabatStart,
                    shabatEnd: shabatEnd,
                    date: new Date(year2, monthIndex2, day2),
                    dateString: dates
                })
            } else {
                console.log("Error while format dates", shabatDates)
            }

        })
        setShabatData(shabatDataUpdated)
    }, [])

    useEffect(() => {
        if (shabatData !== []) {
            setInterval(() => {
                const today = new Date();
                today.setDate(today.getDate() +1)
                const shabatFound = shabatData.find(shabat => isBefore(today, shabat.date));
                console.log(shabatFound)
                const s = {
                    hebDate: shabatFound.hebDate,
                    date: shabatFound.date,
                    parasha: shabatFound.parasha,
                    shabatStart: shabatFound.shabatStart,
                    shabatEnd: shabatFound.shabatEnd
                }
                console.log(s);
                setCurrentShabat(s)
                console.log(currentShabat)
            }, 10000)
        }

    }, [shabatData])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <DashboardTitle/>
            <hr/>
            <div>
                <Clock/>
            </div>
            <hr/>
            <div>
                <Row>
                    <Col>
                        <PrayTime/>
                    </Col>
                    <Col>
                        <Shabat currentShabat={currentShabat}/>
                    </Col>

                    <Col>
                        <Messages/>
                    </Col>

                </Row>
                <br/>
                <Row>
                    <Col>
                        <Deceased/>
                    </Col>
                </Row>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <Row>
                    <WebFooter/>

                </Row>
            </div>

        </div>
    )
}

export default Dashboard