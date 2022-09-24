import React from "react";
import {Col, Row} from "react-bootstrap";
import PrayTime from "./prayTime";
import Shabat from "./shabat";
import Messages from "./messages";
import Clock from "./Clock";
import Date from "./date";


export default function NewDashboardTitle() {
    return (
        <div>
            <Row>
                <Col>
                    <Clock/>

                </Col>
                <Col>
                    <Row>
                        <h1 dir="rtl" className=' hebrew'>
                            בית כנסת על שם הרב אברהם מתיתיהו "הרומנים"
                        </h1>
                    </Row>
                    <Row>
                        <Date/>
                    </Row>

                </Col>


            </Row>

        </div>
    )
}