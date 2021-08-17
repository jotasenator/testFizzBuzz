import React from 'react'
import FizzBuzz from './FizzBuzz'
import { useForm } from './hooks/useForm'


export default function InputFizzBuzzNumber() {

    const [formState, handleInputChange] = useForm({
        'numero': 1
    })

    const { numero } = formState

    return (
        <div className='input-fizzBuzz'>
            <input
                name='numero'
                onChange={handleInputChange}
                type='number'
                value={numero}
            />

            <FizzBuzz i={numero} />
        </div>
    )
}
