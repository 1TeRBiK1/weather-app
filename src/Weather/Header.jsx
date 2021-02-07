import React, { useState, useRef, useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { getPosition, getWeatherToday } from '../GeolacationRedux/actions'

function useSearchForm(defaultValue ='') {
    const [value, setValue] = useState(defaultValue)
    return {
        default: {
            value,
            onChange: e => setValue(e.target.value),
            placeholder: 'Search for a city',
            type: 'search',
            autoComplete: "off",
            className: "search"
        },
        value: () => value,
        clear: () => setValue('')
    }
}

export default function Header(){

    console.log('input')
    const dispatch = useDispatch()
    const position = useSelector(state => state.position)
    useEffect(() => {
        dispatch(getWeatherToday(position.lat, position.lng))
    },[position.lat, position.lng, dispatch])

    const input = useSearchForm()

    const refInput = useRef(null)


    function search(e) {
        e.preventDefault()
        if (input.value().trim()){
            dispatch(getPosition(input.value()))    
            input.clear()
        }
    }

    return (
        <>
            <div className="header">
                <form onSubmit={search} className="form">
                    <Input {...input.default} ref={refInput} />
                    <Button color="secondary">Submit</Button>
                </form>
             </div>
        </>
    )
} 