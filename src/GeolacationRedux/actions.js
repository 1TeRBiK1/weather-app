import { GET_POSITION, GET_WEATHER_TODAY } from "./constants";

export const getPosition = ( city = 'Гомель' ) => (dispatch) => {
    
    // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=272264c18a44436798eff7aa3bd741af&`)
    // .then(res => res.json())
    // .then(data => dispatch(
    //     {
    //         city: data.results[0].formatted,
    //         position: data.results[0].geometry,
    //         type: GET_POSITION
    //     })
    // )
    


    // navigator.geolocation.getCurrentPosition( (position) => {
    //     dispatch( ({
    //                 position: position.coords,
    //                 type: GET_POSITION
    //             })
    //         )
    //     })
}


/*
        Max, min T
        wind speed
        Rain %
        sunrise
        sunset
        Temperature


    */
export const getWeatherToday = ( lat = 55, lng = 33) => (dispatch) => {

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=4&units=S&lang=eng&key=4c39c31813fd4e28a704c555e8cdfb75`)
    .then(res => res.json())
    .then(data => data.data[0])
    .then(data => dispatch(
        {   
            maxT: data.max_temp,
            minT: data.min_temp,
            windSpeed: data.wind_spd,
            rain: data.pop,
            sunrise: data.sunrise_ts,
            sunset: data.sunset_ts,
            description: data.weather.description,
            date: data.valid_date,
            imgCode: data.weather.code,
            type: GET_WEATHER_TODAY
        }
    ))
}