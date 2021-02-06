import { combineReducers } from "redux"
import { GET_POSITION } from "./constants";

const positionReducer = (state = 0, action) => {
    switch(action.type){
        case GET_POSITION:
            return {
                ...state,
                city: action.city,
                lat: action.position.lat, 
                lng: action.position.lng,
            }
        default: return state
    }
}



export const Reduser = combineReducers({
    position: positionReducer
})
