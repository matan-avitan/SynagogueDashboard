import {Card, Carousel} from "react-bootstrap";
import React from "react";
import {deceasedData} from '../data/deceasedData'

export default function Deceased() {

    const deceasedDataFirst = deceasedData.slice(0, deceasedData.length / 2)
    const deceasedDataSecond = deceasedData.slice(deceasedData.length / 2, deceasedData.length)


    const getDeceasedCard = (list) => {

        return list.map(person => {
            return (
                <Carousel.Item interval={3000}git>
                    <div className='deceased'>
                        <h5 className='hebrew deceased-name'>
                            {person.name}
                        </h5>
                    </div>
                </Carousel.Item>
            )
        })
    }

    return (
        <Card className="card-row-1">
            <Card.Title className='hebrew'>

                לעילוי נשמת
            </Card.Title>

            <Card.Text>
                <div className='box-carousel'>
                    <br/>
                    <br/>
                    <Carousel id='f1' className='deceased' controls={false} indicators={false} >
                        {getDeceasedCard(deceasedDataFirst)}
                    </Carousel>
                    <Carousel id='f2' className='deceased'  controls={false} indicators={false}>
                        {getDeceasedCard(deceasedDataSecond)}
                    </Carousel>
                </div>

            </Card.Text>
        </Card>
    )

}
