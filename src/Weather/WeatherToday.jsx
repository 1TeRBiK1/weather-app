import React from 'react'
import { useSelector } from 'react-redux';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Table from './Table';
import { getImg } from '../ImgImports';
import { getDayOfWeek } from '../ToNiceDate/index'

export default function WeatherToday(){

    const { city } = useSelector(state => state.position)

    const { date, imgCode, aveT, description } = useSelector(state => state.forecast.today)
    
    return (
        <div>
            <h2 className="city">{ city }</h2>
            <div className="weatherToday">
                <Card className="margin-rigth-5px">
                    <CardBody>
                    <CardTitle tag="h5">{getDayOfWeek(date)}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{date}</CardSubtitle>
                    </CardBody>
                    <div className="imageText">
                        <img className="imgWeather" width="100%" src={getImg(imgCode)} alt="Card cap" />
                        <div className="flexColumn textCenter">
                            <span className="tempText">{aveT}</span>
                            <span>{description}</span>
                        </div>
                    </div>
                </Card>
                <div className="line margin-rigth-5px"></div>
                <Table />
            </div>
        </div>
    )
}