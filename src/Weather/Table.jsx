import React from 'react' 

export default function Table(){

    return (
        <div className="myTable margin-rigth-5px">
            <div className="infoToday">
                <div className="marginAuto flexColumn">
                    <span className="infoNum">23°</span>
                    <span className="infoText">High</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">7 m/s</span>
                    <span className="infoText">Wind</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">05:27</span>
                    <span className="infoText">Sunrise</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">14°</span>
                    <span className="infoText">Low</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">15%</span>
                    <span className="infoText">Rain</span>
                </div>
                <div className="marginAuto flexColumn">
                    <span className="infoNum">20:57</span>
                    <span className="infoText">Sunset</span>
                </div>
            </div>
        </div>

    )

}