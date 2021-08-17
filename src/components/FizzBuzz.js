import React from 'react'
import { fizzBuzz } from '../utils/fizzBuzz'

export default function FizzBuzz({ i }) {

    return (
        <div className='fizzBuzz'>
            {
                fizzBuzz(i)
            }
        </div>
    )
}
