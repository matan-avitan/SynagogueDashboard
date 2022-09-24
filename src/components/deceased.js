import {Card} from "react-bootstrap";
import React from "react";
import {deceasedData} from '../data/deceasedData'
import AnnouncementBar from "react-announcement-bar/src";

export default function Deceased() {

    const getDeceasedCard = () => {
        return deceasedData.map(person => {
            return (<div>
                <h5 className='hebrew'>
                    {person.name}
                </h5>
                <br/>
            </div>)
        })
    }

    return (
        <Card className="card-row-1">
            <Card.Title className='hebrew'>

                לעילוי נשמת
            </Card.Title>
            <Card.Text>
                <AnnouncementBar height="60" backgroundColor="#000000" relative={false} width="100%">
                    {
                        () => {
                            return (
                                <div style={{width: "80%", margin: "auto", color: "#ffffff"}}>
                                    Want to recieve notifications
                                    <a href="#" style={{fontWeight: "bold", color: "#ffffff"}}>ENABLE !</a>
                                </div>
                            )
                        }
                    }
                </AnnouncementBar>
            </Card.Text>
        </Card>
    )

}
