import React from 'react'
import { useTranslation } from 'react-i18next';

export default function BegginCssEffect() {
    const { t } = useTranslation('global');
    return (
        <div>
            <h1 className='custom-animation'>{t('app.p1')}</h1>
        </div>
    )
}
