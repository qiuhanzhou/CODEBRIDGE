import { useInView } from 'react-intersection-observer'

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
          A broad light in a world full of petrol
        </h2>

        <article
          className={`intro__text ${
            inView ? 'animation__moveInRight' : null
          } }`}
        >
          <p>
            {' '}
            &#160;&#160;&#160;&#160;&#160;&#160; When residential solar energy
            equipment was first made available to homeowners it was costly. The
            people who made the switch were usually those who wanted to make a
            conscious effort to reduce their carbon footprints. But they also
            had the means to invest in the equipment and services needed to make
            that switch. In the beginning, like many other new technologies,
            initial adopters often paid more until the technologies become more
            mainstream. Yes, solar energy is increasingly becoming a viable fuel
            source for everyone. Today, switching to solar energy is far more
            affordable with the help of programs like the Investment Tax Credit
            (ITC). This incentive provides a tax credit of 26 percent of the
            cost to install solar power at your home. While this credit is in
            effect at 26% until the end of 2022, once it expires, solar energy
            will still remain a low-priced source of power as prices will most
            likely continue to drop. Meanwhile, oil, gas, and coal prices are
            likely to continue to increase, especially as sources are depleted
            and the costs to obtain these fuels grow.
          </p>
          <p>
            &#160;&#160;&#160;&#160;&#160;&#160; In the following report,
            we&#39;ll explore the alternate solution to the energy problem which
            is the solar market, we&#39;ll research it&#39;s growth and it&#39;s
            spread globally in the past years, to see how the world is running
            into the inevitable shifting to using solar energy as the
            planet&#39;s main resource.
          </p>
          <p>
            <em>
              &#160;&#160;&#160;&#160;&#160;&#160; Note: The data we will use
              contains the initials &#39;GEM&#39;, which stands for Global
              Energy Monitor, an organization that monitors the global energy
              status around the world. The data you&#39;ll see was taken
              straightly from the GEM data sources.
            </em>
          </p>
        </article>
      </div>
    </section>
  )
}
