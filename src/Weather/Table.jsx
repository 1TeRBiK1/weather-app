import React from 'react' 
import { useSelector } from 'react-redux'
import { getHoursAndMin } from '../ToNiceDate/index'
export default function Table(){

    const { maxT, minT, windSpeed, rain, sunrise, sunset } = useSelector(state => state.forecast.today)
    
    return (
        <div className="myTable margin-rigth-5px">
            <div className="infoToday">
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{maxT}°</span>
                    <span className="infoText">High</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{windSpeed} m/s</span>
                    <span className="infoText">Wind</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{getHoursAndMin(sunrise)}</span>
                    <span className="infoText">Sunrise</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{minT}°</span>
                    <span className="infoText">Low</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{rain}%</span>
                    <span className="infoText">Rain</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">{getHoursAndMin(sunset)}</span>
                    <span className="infoText">Sunset</span>
                </div>
            </div>
        </div>

    )

}