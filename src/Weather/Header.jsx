import React, { useState, useRef } from 'react' 
import { Button, Input } from 'reactstrap'

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

    const [ searchValue, setSearchValue ] = useState('Minsk')

    const input = useSearchForm()

    const refInput = useRef(null)

    function search(e) {
        e.preventDefault()
        if (input.value().trim()){
            // searchMovies(input.value())
            setSearchValue(input.value())
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
                {/* <span className="result">{errorSearch ? 'Not found for ' : 'Results for '} {searchValue}</span>
             */}
             </div>
        </>
    )
} 