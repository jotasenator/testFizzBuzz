import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Answer() {
    const { t } = useTranslation('global');
    return (
        <div>
            <p className='answer'>
                {t('app.p3')}
                <a href='https://codepen.io/jotasMAJA/pen/Pomaqpw'
                    target='_blank' rel='nofollow noopener noreferrer'>
                    {t('app.p4')}
                </a>
            </p>

        </div>
    )
}
