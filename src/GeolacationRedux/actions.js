import { GET_POSITION } from "./constants";

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