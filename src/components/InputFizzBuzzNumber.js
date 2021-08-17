import React, { useEffect, useState } from 'react'
import FizzBuzz from './FizzBuzz'


export default function InputFizzBuzzNumber() {

    const [formState, setFormState] = useState({ numero: 1 })

    const { numero } = formState

    useEffect(() => {

    }, [formState])

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='input-fizzBuzz'>
            <input
                type='number'
                name='numero'
                value={numero}
                autoComplete='off'
                onChange={handleInputChange}
            />

            <FizzBuzz i={formState.numero} />
        </div>
    )
}
