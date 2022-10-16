import {Card, Form, InputGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";


export default function PrayTime(props) {
    console.log(props.currentShabat.shabatStart)

    const [arvitShihi, setArvitShihi] = useState('')
    const [sharitShabat, setSharitShabat] = useState('08:00')
    const [menchaShabat, setMenchaShabat] = useState('13:15')
    const [arvitShabat, setArvitShabat] = useState('')

    useEffect(() => {
        const MS_PER_MINUTE = 60000;
        let nowArvit = new Date("2000-01-01T" + props.currentShabat.shabatStart)
        let updatedArvit = new Date(nowArvit - (- 15 * MS_PER_MINUTE))

        if (updatedArvit.getHours()) {
            setArvitShihi(updatedArvit.getHours() + ':' + updatedArvit.getMinutes())
        } else {
            setArvitShihi(props.currentShabat.shabatStart)
        }


    }, [props.currentShabat.shabatStart])

    useEffect(() => {
        const MS_PER_MINUTE = 60000;
        let nowArvit = new Date("1970-01-01T" + props.currentShabat.shabatEnd)
        let updatedArvit = new Date(nowArvit - 15 * MS_PER_MINUTE)
        setArvitShabat(updatedArvit.getHours() + ':' + updatedArvit.getMinutes())
    }, [props.currentShabat.shabatEnd])

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
                                value={arvitShihi}
                                onChange={(e) => {
                                    setArvitShihi(e.target.value)
                                }}
                            />
                            <InputGroup.Text className="time-pray-text hebrew" dir="rtl" lang="he">
                                מנחה שישי:
                            </InputGroup.Text>
                        </InputGroup>

                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                                value={sharitShabat}
                                onChange={(e) => {
                                    setSharitShabat(e.target.value)
                                }}
                            />
                            <InputGroup.Text className="time-pray-text hebrew" dir="rtl" lang="he">
                                שחרית:
                            </InputGroup.Text>

                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                                value={menchaShabat}
                                onChange={(e) => {
                                    setMenchaShabat(e.target.value)
                                }}
                            />
                            <InputGroup.Text className="time-pray-text  hebrew" dir="rtl" lang="he">
                                מנחה:
                            </InputGroup.Text>

                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="time-pray"
                                value={arvitShabat}
                                onChange={(e) => {
                                    setArvitShabat(e.target.value)
                                }}
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
