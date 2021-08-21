import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function ButtonLanguage() {
    const { i18n } = useTranslation('global');
    const [selected, setSelected] = useState(true)

    const handleClickEn = () => {
        if (!selected) {
            i18n.changeLanguage('en')
            setSelected(true)
        }
    }
    const handleClickEs = () => {

        if (selected) {
            i18n.changeLanguage('es')
            setSelected(false)
        }
    }

    return (
        <div>
            <button
                className={!selected ? 'style' : undefined}
                onClick={handleClickEs}>Español</button>
            <button
                className={selected ? 'style' : undefined}
                onClick={handleClickEn}>English</button>

        </div>
    )
}
