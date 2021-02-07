import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Sun from '../assets/img/801.png' 
import Table from './Table';

export default function WeatherToday(){

    /*
        Max, min T
        wind speed
        Rain %
        sunrise
        sunset
        Temperature
        Day (number )


    */



    return (
        <div className="weatherToday">
            <Card className="margin-rigth-5px">
                <CardBody>
                <CardTitle tag="h5">Monday</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">08.02.2021</CardSubtitle>
                </CardBody>
                <div className="imageText">
                    <img className="imgWeather" width="100%" src={Sun} alt="Card cap" />
                    <div className="flexColumn textCenter">
                        <span className="tempText">-10°</span>
                        <span >Sunny</span>
                    </div>
                </div>
            </Card>
            <div className="line margin-rigth-5px"></div>
            <Table />
    </div>
    )
}