import {Card, Form, InputGroup} from "react-bootstrap";
import React from "react";


export default function PrayTime() {
    return (
        <Card className="card-row-1">
            <Card.Title className='hebrew'>
                שעות תפילה
            </Card.Title>
            <Card.Text>

                <div className="pray-card">
                    <Form>
                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                            />
                            <InputGroup.Text className="time-pray-text hebrew" dir="rtl" lang="he" >
                                שחרית:
                            </InputGroup.Text>

                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                            />
                            <InputGroup.Text className="time-pray-text  hebrew" dir="rtl" lang="he">
                                מנחה:
                            </InputGroup.Text>

                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                            />
                            <InputGroup.Text className="time-pray-text hebrew" dir="rtl" lang="he">
                                ערבית:
                            </InputGroup.Text>

                        </InputGroup>
                    </Form>

                </div>
            </Card.Text>
        </Card>
    )

}
