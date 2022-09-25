import {Card, Carousel} from "react-bootstrap";
import React from "react";
import {deceasedData} from '../data/deceasedData'

export default function Deceased() {

    const deceasedDataFirst = deceasedData.slice(0, deceasedData.length / 3)
    const deceasedDataSecond = deceasedData.slice(deceasedData.length / 3, deceasedData.length / 3 * 2)
    const deceasedDataThird = deceasedData.slice(deceasedData.length / 3 * 2, deceasedData.length)


    const getDeceasedCard = (list) => {

        return list.map(person => {
            return (
                <Carousel.Item interval={3000}>
                    <div className='deceased'>
                        <h5 className='hebrew'>
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
                    <Carousel className='deceased' controls={false} indicators={false}>
                        {getDeceasedCard(deceasedDataFirst)}
                    </Carousel>
                    <Carousel className='deceased'  controls={false} indicators={false}>
                        {getDeceasedCard(deceasedDataSecond)}
                    </Carousel>
                    <Carousel className='deceased'  controls={false} indicators={false}>
                        {getDeceasedCard(deceasedDataThird)}
                    </Carousel>
                </div>

            </Card.Text>
        </Card>
    )

}
