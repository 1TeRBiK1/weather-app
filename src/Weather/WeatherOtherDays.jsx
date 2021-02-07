import React from 'react';
import CardOtherDay from './CardOtherDay';
import { useSelector } from 'react-redux'


const WeatherOtherDays = () => {

    const { next1Day, next2Day, next3Day } = useSelector(state => state.forecast)
    
  return (
    <div className="weatherOtherDays">
      <CardOtherDay info = { next1Day } />
      <CardOtherDay info = { next2Day }/>
      <CardOtherDay info = { next3Day }/>
    </div>
  );
};

export default WeatherOtherDays;