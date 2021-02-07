import { GET_POSITION, GET_WEATHER_TODAY, K_TO_C } from "./constants";

export const getPosition = ( city = 'Minsk' ) => (dispatch) => {
    console.log('position')
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=272264c18a44436798eff7aa3bd741af&`)
    .then(res => res.json())
    .then(data => {
        dispatch(
        {
            city: data.results[0].formatted,
            position: data.results[0].geometry,
            type: GET_POSITION
        })}
    ).catch(e => console.log(e))
}

export const getWeatherToday = ( lat = null, lng = null) => (dispatch) => {
    if(!lat || !lng) return 
    console.log('is get')
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=4&units=S&lang=eng&key=4c39c31813fd4e28a704c555e8cdfb75`)
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        
        const forecast = data.map(day => ({
            maxT: parseInt(day.max_temp - K_TO_C),
            minT: parseInt(day.min_temp - K_TO_C),
            windSpeed: parseInt(day.wind_spd),
            rain: day.pop,
            sunrise: day.sunrise_ts,
            sunset: day.sunset_ts,
            description: day.weather.description,
            date: day.valid_date,
            imgCode: day.weather.code,
            aveT: parseInt(day.temp - K_TO_C)
        }))
        dispatch(
        {   
            forecast,
            type: GET_WEATHER_TODAY
        }
    )}).catch(e => console.log(e))
}