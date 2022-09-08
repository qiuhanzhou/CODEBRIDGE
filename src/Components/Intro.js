import { useInView } from 'react-intersection-observer'
import Counter from './Counter'

export default function Intro() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className='section intro' id='intro'>
      <div className='intro__container'>
        <h2
          className={`intro__title ${
            inView ? 'animation__moveInLeft' : null
          } }`}
        >
          INTRO - Know the places your online pals come from a little better
        </h2>

        <p
          className={`intro__text ${
            inView ? 'animation__moveInRight' : null
          } }`}
        >
          When residential solar energy equipment was first made available to
          homeowners it was costly. The people who made the switch were usually
          those who wanted to make a conscious effort to reduce their carbon
          footprints. But they also had the means to invest in the equipment and
          services needed to make that switch. In the beginning, like many other
          new technologies, initial adopters often paid more until the
          technologies become more mainstream. Yes, solar energy is increasingly
          becoming a viable fuel source for everyone. Today, switching to solar
          energy is far more affordable with the help of programs like the
          Investment Tax Credit (ITC). This incentive provides a tax credit of
          26 percent of the cost to install solar power at your home. While this
          credit is in effect at 26% until the end of 2022, once it expires,
          solar energy will still remain a low-priced source of power as prices
          will most likely continue to drop. Meanwhile, oil, gas, and coal
          prices are likely to continue to increase, especially as sources are
          depleted and the costs to obtain these fuels grow.
        </p>
      </div>
    </section>
  )
}
