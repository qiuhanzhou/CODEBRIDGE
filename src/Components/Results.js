/*eslint-disable */

import chart from '../images/farms-per-region-plot.png'
import table from '../images/capacity-per-region-table.png'
import chart2 from '../images/number-of-farms-without-asia.png'
import bar from '../images/bar-plot-sm2.png'
import map from '../images/map-sm2.png'
import owner from '../images/owners-sm.png'
import twoCountry from '../images/two-country.png'

import { useEffect, useState } from 'react'
import SimpleLineChart from './SimpleLineChart'
import BarPlot from './BarPlot'
import Map from './Map'
import Owner from './Owner'

export default function Results() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 1250

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <section className='section results' id='results'>
      <h2 className='results__title'>
        Get ready and check out our amazing and fully interactive data
        visualization diagrams from our data analysis results!
      </h2>

      <div className='results__group'>
        <div className='results__wrap'>
          <h1 className='results__group-title'>
            {' '}
            1. Exploring Solar Farms Energy Output
          </h1>
        </div>

        <div>
          {width > breakPoint ? (
            <BarPlot />
          ) : (
            <div>
              <img
                className='results__small-img results__sm'
                src={bar}
                alt='average capacity per region bar plot'
              />
            </div>
          )}
        </div>

        <div className='results__explanation-container'>
          <img
            className='results__table'
            src={table}
            alt='average capacity per region table.png'
          />
          <article className='results__explanation '>
            <h3 className='results__explanation_note'>Analyzing the regions</h3>
            <p>
              As we can observe, the region with the highest average energy
              output is Asia, with an average of 5405 MWs per solar farm
              project, having more than doubled average energy output than each
              of the Europe and the other lowest energy output regions. Followed
              by Asia are the Middle East region (averagely 4370 Mws per a solar
              farm project), Africa (averagely 3752 MWs per a solar farm
              project), and Europe (averagely 2400 MWs per a solar farm
              project); Theses top 4 regions have a much higher average energy
              output than the other five regions, As all of the top regions have
              at least more than 3.5 times of any of these last regions. The
              region with the lowest average energy output is North America,
              with 252 MWs per each solar project. If we ignore North Korea,
              which has only one solar facility and is bumping the average
              energy output for Asia drastically (Try clicking the country on
              the interactive plot's legend), we can see that The region that
              produces the highest energy output is actually the Middle East
              region, and that Asia is dropping to the third place below Africa
              without North Korea.
            </p>
            <h3 className='results__explanation_note'>
              Analyzing the countries
            </h3>{' '}
            <p>
              Zooming to the micro-level, the leading countries are Oman
              (averagely 1439.09 MWs per average solar project, Middle East),
              Kuwait (averagely 1265 MWs per solar project, Middle East), and
              Morocco (averagely 539.33 MWs per solar project, Africa). North
              Korea (Asia) average 2500 MWs, but that's just because it has only
              one solar farm overall. The countries with the absolute lowest
              energy output are Somalia and Sudan, tied at the first place with
              an average of 10 MWs per solar project, which is also minimum
              capacity allowed in Arab countries. Following them are a list of
              countries - as both Barbados, South Sudan, Madagascar, Liberia and
              Guinea-Bissau average a capacity of 20 MWs per solar project in
              the heavily tied second place. Seems like the leading countries
              are tending to be usually Arab countries and the countries with
              the lowest average energy output are tending to be usually from
              third-world countries.
            </p>
          </article>
        </div>

        <div>
          {width > breakPoint ? (
            <Map />
          ) : (
            <div>
              <img
                className='results__small-img results__sm'
                src={map}
                alt='global energy output map'
              />
            </div>
          )}
        </div>

        <article className='results__explanation'>
          <h3 className='results__explanation_note'>
            Global energy output density map explanation:
          </h3>
          <p>
            We can see pretty strongly that Asia has the highest Energy output
            overall, and that solar farms are distributed pretty equally around
            east to central Asia, and in India as well. Europe is also pretty
            distributed with heavy energy output farms around mostly Italy, The
            UK, and western Europe (i.e. Spain and Portugal). On the other hand,
            solar farms on the Middle east aren't distributed so heavily and it
            looks like there are also less farms than the other regions we spoke
            about before, while this might be explained by that in this region
            each solar plant produces a bigger energy output than the regular
            solar farms around Asia and Europe.
          </p>
          <h4 className='results__explanation_note'>
            The leading energy output farms
          </h4>
          <p>
            You could also notice a big red blur in North Australia that's
            located in the city of Elliot on Barkley Region county. It
            represents the Powell Creek solar farm which is the most productive
            solar farm **with an energy output of 20K MegaWatts**. After that
            farm, the leading farms globally are the Al Wusta Solar Plant in
            Oman (12.5k MWs), which is located in the wastelands at the
            south-west part of the country, and the Ladakh Solar park in India
            (10k MWs), which is located in the city of Leh in the Nubra county.
          </p>
          <h4 className='results__explanation_note'>The north is empty</h4>
          <p>
            We can see that there are *barely* any solar farms in the north, to
            be specific - in Russia, the Norse countries (except Denmark),
            Greenland, Iceland and North Canada. That might be because these
            regions don't have enough sun light, light hours or heat to be
            prolific enough for solar energy production. On the furthest
            contrary side, **Finland is an exception as it has the northest 2
            solar farms in the entire world**, the Lapua and Palloneva solar
            farms, which are producing 80 MWs and 500 MWs, orderly. **Lapua
            solar farm is the northest farm of all**, located in the city of
            Lapua at the Seinäjoki sub-region.
          </p>

          <h4 className='results__explanation_note'>
            The higher the sun shine
          </h4>
          <p>
            There is also another interesting fact that requires attention,
            **the majority of the solar farms are located on the coast, or in
            countries that are close to the coast** - this can be seen perfectly
            in Africa, where the solar farms who produce the highest energy
            signatures are the ones close to the coast. Also note that each of
            East Asia, East Australia, India and both the Americas shows the
            same supporting evidence to that assumption.
          </p>
        </article>
      </div>

      <div className='results__group'>
        <h1 className='results__group-title'>
          2. Exploring the solar farms amounts growth rate, per region{' '}
        </h1>
        <div className='results__img-wrapper'>
          <img
            className='results__small-img'
            src={chart}
            alt='solar farms per region plot'
          />
          <img
            className='results__small-img'
            src={chart2}
            alt='solar farms per region plot'
          />
        </div>
        <h4 className='results__explanation_note'>
          Plot Note: The data on the faded purple frame are on the right
          represents known future projects that are expected to start operating
          in the following years.
        </h4>
        <p>
          Looking at the marginal boxplots above the graph, we can see that all
          of the countries are equally distributed, while the peak of globally
          growth has been reached to in the year of 2019 - since that year,
          growth rate seems to have been faded in all regions equally. That
          global decline in new solar numbers could possibly be explained by the
          global Coronavirus shutdown in 2020 to the beginning of 2021, that
          might've shelved, canceled or delayed a lot of projects from starting
          to run. We can clearly see that Asia has the highest number of solar
          farms, by a supreme distance over all others regions - as since 2013,
          a huge growth rate trendline has started for the region, growing by at
          least 300 solar farms year to year up until the 2019 peak. The runner
          up is surprisingly North America, which might be really low on total
          energy output, but are opening more a more solar plants throughout the
          years. Central America and the Caribbean is the region the had the
          weakest growth with the lowest number of solar projects.
        </p>
      </div>

      <div className='results__group'>
        <h1 className='results__group-title'>
          3. The leading ownerships in the solar market
        </h1>

        <div>
          {width > breakPoint ? (
            <Owner />
          ) : (
            <div>
              <img
                className='results__small-img results__sm'
                src={owner}
                alt='solar farms per ownership'
              />
            </div>
          )}
        </div>

        <article className='results__explanation'>
          <h4 className='results__explanation_note'>
            Leading owners plot graph explanation:{' '}
          </h4>{' '}
          <p>
            {' '}
            The company who owns the most solar farms around the world is
            NextEra Energy, which has 140 solar farms under it's commmand, more
            than 2 times of the other 3rd to 10th places in the ranking, and
            about 1.7 times the 2nd place amount; NextEra Energy are taking a
            much bigger part of the solar energy solution to the oil and petrol
            recession than the entire industry, pretty much controlling the
            Solar Energy market. The following leading ownerships companies were
            the CECEP Solar Energy Technology company, having 82 solar farms
            under it's belt, the CGN Solar Energy Development company, that
            possess 70 solar farms globally, and Solatio Energia who owns 62
            solar farms. The rest of the leading 10 have pretty similar amounts
            that range from Adani Green Energy's 56 solar farms to Duke Energy's
            48 farms. Be noted that right now, out of the 3453 known ownership
            companies or individuals, Only 112 owners possess more than 10 solar
            farms overall, i.e. there are 3323 ownerships that are
            underepresented in the solar market, while the leading companies
            control the majority. There's a cartel union in the solar farms
            market, where the top companies control a much bigger bigger share
            than the rest of the small ones.
          </p>
        </article>
      </div>

      <div className='results__group'>
        <h1 className='results__group-title'>
          4. Top two countries with the largest solar capaicity
        </h1>

        <div>
          {width > breakPoint ? (
            <SimpleLineChart />
          ) : (
            <div>
              <img
                className='results__small-img results__sm'
                src={twoCountry}
                alt='top two countries with largest capacity chart'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
