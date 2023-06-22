import React, {useEffect, useState} from "react";
import {Carousel, Row} from "react-bootstrap";

import WebFooter from "../components/webFooter";

import NewDashboardTitle from "../components/newTitle";
import Main from "./main";


function Dashboard() {
    const [needCarousel, setNeedCarousel] = useState(false);


    const getCenterPage = () => {
        if (needCarousel) {
            return (
                <div>
                    <Carousel id='f' controls={false} indicators={false} fade={true}>
                        <Carousel.Item interval={6000}>
                            <img className='carousel-size'
                                 src={require('./imgPage/page1.png')}
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <div className='carousel-size'></div>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                                           <Main/>

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <div className='carousel-size'></div>
                        </Carousel.Item>

                    </Carousel>
                </div>

            )
        } else {
            return (<div>
                <Main/>
            </div>)
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <NewDashboardTitle/>
            <hr/>
            <div>
                {getCenterPage()}
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