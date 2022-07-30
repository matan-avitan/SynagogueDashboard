import React from "react";
import Clock from "../components/Clock";
import {Card, Col, Row} from "react-bootstrap";

function Dashboard() {

    return (
        <div>
            <h1>
                בית כנסת
            </h1>
            <hr/>
            <div>
                <Clock/>
            </div>
            <hr/>
            <div>
                <Row>
                    <Col>
                        <Card>
                            שעות תפילה
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            זמני כניסת השבת
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            הודעות
                        </Card>
                    </Col>

                </Row>
            </div>
            <br/>
            <Row>
                <Col>
                    <Card>
                        נפטרים
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card>
נתרם לעילוי נשמת
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard