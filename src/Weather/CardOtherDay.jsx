import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import { getImg } from '../ImgImports';
import { getDayOfWeek } from '../ToNiceDate/index'

export default function CardOtherDay({info}) {
    const { maxT, minT, aveT, windSpeed, rain, date, description, imgCode } = info
    return(
    <Card>
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
        <CardBody>
            <CardText className="infoOtherDays">
                <span>Max: {maxT}°</span>
                <span>Min: {minT}°</span>
                <span>Rain: {rain}%</span>
                <span>Wind: {windSpeed} m/s</span>
            </CardText>
        </CardBody>
      </Card>
    )
}