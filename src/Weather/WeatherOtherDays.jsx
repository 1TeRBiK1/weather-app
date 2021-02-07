import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Sun from '../assets/img/801.png' 


const WeatherOtherDays = (props) => {
  return (
    <div className="weatherOtherDays">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Monday</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">08.02.2021</CardSubtitle>
        </CardBody>
        <div className="imageText">
            <img className="imgWeather" width="100%" src={Sun} alt="Card cap" />
            <span className="tempText">-10°</span>
        </div>
        <CardBody>
          <CardText>Sunny, wind: 10 m/s rain: 20%</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherOtherDays;