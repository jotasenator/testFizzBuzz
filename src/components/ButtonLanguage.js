import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function ButtonLanguage() {
    const { i18n } = useTranslation('global');
    const [selected, setSelected] = useState(true)

    const styleValue = {
        transform: 'scale(1.1)',
        color: 'darkcyan',
        backgroundColor: 'white'
    }

    const styleEs = () => {
        if (!selected) {
            return styleValue
        }
    }
    const styleEn = () => {
        if (selected) {
            return styleValue
        }
    }

    const clickEs = () => {
        i18n.changeLanguage('es')
        setSelected(false)
    }

    const clickEn = () => {
        i18n.changeLanguage('en')
        setSelected(true)
    }

    return (
        <div>
            <button
                style={styleEs()}
                className='es'
                onClick={clickEs}>Español</button>
            <button
                style={styleEn()}
                className='en'
                onClick={clickEn}>English</button>

        </div>
    )
}
