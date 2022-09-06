import Card from './Card'
import { useInView } from 'react-intersection-observer'
import { Fragment, useEffect, useState } from 'react'

export default function Counter() {
  const cards = [
    {
      id: 1,
      description: 'OF GLOBAL SOLAR SYSTEMS INSTALLED',
      link: 'https://gamechangesolar.com/images/about/icon1.png',
      unit: ' TW+',
      number: 1,
    },
    {
      id: 2,
      description: 'SOLAR MODULES ON GLOBAL SOLAR SYSTEMS',
      link: 'https://gamechangesolar.com/images/about/icon3.png',
      unit: ' million+',
      number: 375.8,
    },
    {
      id: 3,
      description: 'CO2 TONS OFFSET OVER 25YRS GLOBAL SOLAR SYSTEMS',
      link: 'https://gamechangesolar.com/images/about/icon.png',
      unit: ' trillion+',
      number: 2.6,
    },
    {
      id: 4,
      description: 'OIL GALLONS OFFSET OVER 25YRS GLOBAL SOLAR SYSTEMS',
      link: 'https://gamechangesolar.com/images/about/icon2.png',
      unit: ' billion+',
      number: 380,
    },
    {
      id: 5,
      description:
        'HOMES CAN BE POWERED BY THE ENERGY PRODUCED ON GLOBAL SOLAR SYSTEMS',
      link: 'https://gamechangesolar.com/images/about/home.png',
      unit: ' billion+',
      number: 506,
    },
  ]

  const [ref, inView] = useInView({ threshold: 0.5 })

  const [renderCards, setRenderCards] = useState(false)

  useEffect(() => {
    if (inView && !renderCards) {
      setRenderCards(true)
    }
  }, [inView, renderCards])

  return (
    <Fragment>
      <h2 className='counter__title'>
        Global Solar Positively Impacts on the Environment
      </h2>
      <div className='section counter' ref={ref}>
        {renderCards && cards.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </Fragment>
  )
}

// animateCounter(document.querySelector('input'))
