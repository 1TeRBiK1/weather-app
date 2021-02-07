import React from 'react'
import WeatherOtherDays from './WeatherOtherDays'
import WeatherToday from './WeatherToday'

export default function Main(){

    return(
        <div>
            <WeatherToday />
            <WeatherOtherDays />
        </div>
    )

}