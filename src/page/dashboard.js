import React from "react";
import Clock from "../components/Clock";
import {Card, Col, Row} from "react-bootstrap";
import DashboardTitle from "../components/dashboardTitle";
import PrayTime from "../components/prayTime";
import Messages from "../components/messages";
import Shabat from "../components/shabat";
import WebFooter from "../components/webFooter";
import Deceased from "../components/deceased";

function Dashboard() {

    return (
        <div>
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
                        <Shabat/>
                    </Col>

                    <Col>
                        <Messages/>
                    </Col>

                </Row>
            </div>
            <br/>
            <Row>
                <Col>
                    <Deceased/>
                </Col>
            </Row>
            <br/>
            <Row>
                <WebFooter/>

            </Row>
        </div>
    )
}

export default Dashboard