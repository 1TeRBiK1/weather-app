import React from 'react'
import WeatherOtherDays from './WeatherOtherDays'
import WeatherToday from './WeatherToday'
import { YMaps, Map } from 'react-yandex-maps'
import { useSelector } from 'react-redux'

export default function Main(){

    const { lat, lng } = useSelector(state => state.position)

    return(
        <div>
            <div className="firstRow">
                <WeatherToday />
                <YMaps>
                    <Map className="map" state={{ center: [ lat, lng ], zoom: 12 }} />
                </YMaps> 
            </div>
            <WeatherOtherDays />
        </div>
    )

}