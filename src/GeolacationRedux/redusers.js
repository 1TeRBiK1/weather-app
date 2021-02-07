import { combineReducers } from "redux"
import { GET_POSITION, GET_WEATHER_TODAY } from "./constants";

const positionReducer = (state = {city: 'Minsk', lat: null, lng: null}, action) => {
    switch(action.type){
        case GET_POSITION:
            return {
                ...state,
                city: action.city,
                lat: action.position.lat, 
                lng: action.position.lng,
            }
        default: return {
            ...state}
    }
}

let initialState = {
    today: {
        maxT: 0,
        minT: 0,
        windSpeed: 0,
        rain: 0,
        sunrise: 0,
        sunset: 0,
        description: 'Sunny',
        date: '',
        imgCode: 800,
        aveT: 0
    },
    next1Day: {
        maxT: 0,
        minT: 0,
        windSpeed: 0,
        rain: 0,
        sunrise: 0,
        sunset: 0,
        description: 'Sunny',
        date: '',
        imgCode: 800,
        aveT: 0
    },
    next2Day: {
        maxT: 0,
        minT: 0,
        windSpeed: 0,
        rain: 0,
        sunrise: 0,
        sunset: 0,
        description: 'Sunny',
        date: '',
        imgCode: 800,
        aveT: 0
    },
    next3Day: {
        maxT: 0,
        minT: 0,
        windSpeed: 0,
        rain: 0,
        sunrise: 0,
        sunset: 0,
        description: 'Sunny',
        date: '',
        imgCode: 800,
        aveT: 0
    }
}


const forecastReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER_TODAY:
            console.log('reduser')
            return {
                ...state,
                today: action.forecast[0],
                next1Day: action.forecast[1],
                next2Day: action.forecast[2],
                next3Day: action.forecast[3]

            }
        default: return {
            ...state
        }
    }
}

export const Reduser = combineReducers({
    position: positionReducer,
    forecast: forecastReducer
})
