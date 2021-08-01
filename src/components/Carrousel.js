import React from 'react'

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

import pic1 from '../images/slider/blogPersonal.png'
import pic2 from '../images/slider/piano.png'
import pic3 from '../images/slider/pruebaDofleini.png'

import { useTranslation } from 'react-i18next';

export default function Carrousel(props) {

    const { t } = useTranslation('global');

    const items = [
        {
            name: "Blog de joTas",
            link: <a
                href='https://jotasenator.github.io/blogjotas/'
                target='_blank' rel='nofollow noopener noreferrer'>
                {t('app.p6')}
            </a>,
            pic: < img src={pic1} alt='Blog de joTas' />
        },
        {
            name: "Piano",
            link: <a
                href='https://piano-gilt.vercel.app/'
                target='_blank' rel='nofollow noopener noreferrer'>
                {t('app.p7')}
            </a>,
            pic: < img src={pic2} alt='Piano' />
        },
        {
            name: "Dofleini Challenge",
            link: <a
                href='https://jotasenator.github.io/pruebaDofleini/'
                target='_blank' rel='nofollow noopener noreferrer'>
                {t('app.p8')}
            </a>,
            pic: < img src={pic3} alt='Dofleini Challenge' />
        },

    ]
    return (
        <div className='sliderSize' >
            <Carousel >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

const Item = (props) => (
    <Paper className='insidePic'>
        <p style={{ backgroundColor: 'cadetblue' }}>{props.item.link}</p>
        <p style={{ transform: 'scale(0.8)', marginTop: '0px', display: 'flex', justifyContent: 'center' }}>{props.item.pic}</p>
    </Paper >
)
