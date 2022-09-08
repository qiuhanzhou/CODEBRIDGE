export default function Conclusion() {
  return (
    <section className='section conclusion' id='conclusion'>
      <div className='conclusion__container'>
        <h2 className='results__group-title'>5. General Conclusion </h2>

        <article className='conclusion__text'>
          <div id='preview' class='preview-html' preview='' debounce='150'>
            <p class='has-line-data' data-line-start='1' data-line-end='2'>
              At the first time we observed the data during the Data Exploration
              section, we&#39;ve noticed some problems:
            </p>
            <ul>
              <li class='has-line-data' data-line-start='2' data-line-end='3'>
                All columns&#39; names were capitalized, while some possessed
                really long names.
              </li>
              <li class='has-line-data' data-line-start='3' data-line-end='11'>
                There were 15 columns with missing values, out of which 8
                columns are clearly fine to ignore. The columns who required the
                special attention were:
                <ul>
                  <li
                    class='has-line-data'
                    data-line-start='4'
                    data-line-end='5'
                  >
                    <strong>
                      <code>Phase Name</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='5'
                    data-line-end='6'
                  >
                    <strong>
                      <code>City</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='6'
                    data-line-end='7'
                  >
                    <strong>
                      <code>Major area (prefecture, district)</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='7'
                    data-line-end='8'
                  >
                    <strong>
                      <code>Operator</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='8'
                    data-line-end='9'
                  >
                    <strong>
                      <code>Local area (taluk, county)</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='9'
                    data-line-end='10'
                  >
                    <strong>
                      <code>Owner</code>
                    </strong>
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='10'
                    data-line-end='11'
                  >
                    <strong>
                      <code>State/Province</code>
                    </strong>
                  </li>
                </ul>
              </li>
              <li class='has-line-data' data-line-start='11' data-line-end='12'>
                In the &#39;About&#39; section of the database, the author of
                the data advised to check the consistency across the{' '}
                <code>'Country</code> column trackers, although stating it
                should&#39;ve been ordered.
              </li>
            </ul>
            <h2
              className='conclusion__subtitle'
              data-line-start='12'
              data-line-end='13'
            >
              <a id='51_Data_Preprocessing_12'></a>
              <strong className='conclusion__subtitle'>
                5.1 Data Preprocessing
              </strong>
            </h2>
            <p class='has-line-data' data-line-start='13' data-line-end='24'>
              We started preprocessing the data in the following ways: <br />
              <strong>
                <em>1. Fixing columns names:</em>
              </strong>
              <br /> We started by changing all the columns&#39; names to short
              and <code>'snake_cased'</code> names, so they&#39;ll be easier to
              work with.
              <strong>
                {' '}
                <br />
                <em>2. Wrong dtypes</em>
              </strong>
              <br /> We&#39;ve fixed wrong columns&#39; data types: - The{' '}
              <code>'start_year'</code> and <code>'retired_year'</code> columns
              dtype has been changed from <code>float64</code> to{' '}
              <code>Int64</code>. - The <code>'country'</code> and{' '}
              <code>'region'</code> <code>'status'</code> columns dtype has been
              changed from <code>object</code> to <code>category</code>.
              <strong>
                <em>
                  {' '}
                  <br />
                  3. Validating data on the <code>'country'</code> column
                </em>
              </strong>
              <br /> We&#39;ve noticed that the <code>'country'</code> column
              was sorted alphabetically only partly on the first rows, but on
              the plus side there are no misspelling or partial duplicated
              country names. To fix this we have sorted the data by the{' '}
              <code>'country'</code> column and resetted the index.
              <strong>
                <em>
                  {' '}
                  <br />
                  4. Handling the missing values
                </em>
              </strong>
              <br />
              To decide how should we handle missing values, we&#39;ve first
              explored all missing values for possible connections using some
              &#39;missingno&#39; missing values plots, and we&#39;ve found that
              overall there aren&#39;t any fully based connections between
              missing values, except:
            </p>
            <ul>
              <li class='has-line-data' data-line-start='24' data-line-end='25'>
                The <code>'start_year'</code> and <code>'retired_year'</code>{' '}
                columns had a full correlation of 1, which makes sense because
                the database author has stated that the starting year for
                projects who got cancelled or shelved was left missing, so
                projects who got canceled cannot be retired.
              </li>
              <li class='has-line-data' data-line-start='25' data-line-end='27'>
                Using the matrix plot, we&#39;ve seen that missing values tend
                to look differently in different rows groups locations on the
                table, hinting there might be some connection between the
                missing values while looking at the columns for rows of similar
                countries. We&#39;ve also seen that some missing rows of the the
                owner and operator columns seems to have full values on their
                correlating local name columns.
                <strong>
                  <em>
                    {' '}
                    <br />
                    4.1 Afterwards, we&#39;ve started handling the 7 columns
                    that we&#39;ve decided that should be handled in prior
                    stages:{' '}
                  </em>
                </strong>
                <br />
              </li>
            </ul>
            <ol>
              <li class='has-line-data' data-line-start='27' data-line-end='32'>
                I&#39;ve decided to fill the missing values in the location
                column with their coordinates values. We&#39;ve created the{' '}
                <code>'coordinates'</code> column, that created a string dtyped
                column containing the latitude and longitude in the accepted
                format of it. After that I&#39;ve created a reversed mapping
                function that is used for mapping the coordinates exact
                addresses. We used that function to map the missing values in
                the following columns, while the rest of the missing values were
                filled with the value &#39;Unavailable&#39;:
                <ul>
                  <li
                    class='has-line-data'
                    data-line-start='28'
                    data-line-end='29'
                  >
                    We mapped and filled 252 locations out of the 647 missing
                    values in the <code>state_prov</code> column.
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='29'
                    data-line-end='30'
                  >
                    We mapped and filled 582 locations out of the 3920 missing
                    values in the <code>major_area</code> column.
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='30'
                    data-line-end='31'
                  >
                    We mapped and filled 1309 locations out of the 3207 missing
                    values in the <code>local_area</code> column.
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='31'
                    data-line-end='32'
                  >
                    We mapped and filled 1618 exactly accurate locations out of
                    the 1964 missing values with an <code>'exact'</code>{' '}
                    location accuracy, and from a total amount of 4422 missing
                    values in the <code>city</code> column itself (That&#39;s
                    because mapping the city of approx… accurate coordinates
                    will not be prolific).
                  </li>
                </ul>
              </li>
              <li class='has-line-data' data-line-start='32' data-line-end='35'>
                For missing values with local names on the &#39;local name&#39;
                columns, we&#39;ve translated local names to fill values,
                filling the remaining missing values with the value 'Unknown:
                <ul>
                  <li
                    class='has-line-data'
                    data-line-start='33'
                    data-line-end='34'
                  >
                    <strong>
                      <code>operator</code>
                    </strong>{' '}
                    - 7 values were filled out of 3290.
                  </li>
                  <li
                    class='has-line-data'
                    data-line-start='34'
                    data-line-end='35'
                  >
                    <strong>
                      <code>owner</code>
                    </strong>{' '}
                    - One value was filled out of 840.
                  </li>
                </ul>
              </li>
              <li class='has-line-data' data-line-start='35' data-line-end='36'>
                We&#39;ve managed to fill 28 rows out of the 5350 missing values
                in the <code>phase_name</code> column using the non-encrypted
                other IDs in the <code>other_unit_phase_id</code> column. Since
                missing values take too much big of a share from the column, we
                left the rest of the values as they were.
              </li>
            </ol>
            <h2
              className='conclusion__subtitle'
              data-line-start='36'
              data-line-end='37'
            >
              <a id='52_The_Analysis_and_Data_Visualization_36'></a>
              <strong className='conclusion__subtitle'>
                5.2 The Analysis and Data Visualization
              </strong>
            </h2>
            <p class='has-line-data' data-line-start='37' data-line-end='38'>
              We&#39;ve explored a few areas in that section, as my top
              conclusions were as follows.
            </p>
            <h3 class='code-line' data-line-start='38' data-line-end='39'>
              <a id='Conclusions_regarding_capacity_output_38'></a>
              <strong>
                <em>Conclusions regarding capacity output:</em>
              </strong>
            </h3>
            <p class='has-line-data' data-line-start='39' data-line-end='42'>
              Asia is the region that produces the highest energy output in the
              entire world, but without North Korea, it&#39;s dropping to the
              3rd place, symbolizing that it constitutes a huge part of Asia
              leading the solar market output. The Middle East region produces a
              lot of energy, and{' '}
              <strong>
                although it has less solar farms, each farm is producing much
                more solar energy averagely than in any other region
              </strong>
              . Solar farm located in Europe have the exact opposite story, as
              they tend to have a smaller capacity than most solar farms in the
              big regions, but are compensating mostly in the numbers, as they
              have a lot of solar farms distributed mostly in Greece, The UK,
              Italy and West Europe (a.k.a Spain and Portugal) shores, majorly.
              solar farms located in Africa have a pretty high average capacity
              and great sunlight conditions, making their relatively small
              amount of solar farms powerful enough to compete with the big
              regions, although the vast majority of the solar farms in the
              region are located near the edges of the continent, while most of
              central Africa seems to lack solar farms. There seems to be a big
              effect on climate and location on the successful output of a solar
              farm, as the countries who produce the most solar energy are
              usually Arab countries, that are located in hot climate areas like
              Africa or close to the coast, where they get a lot more sunlight
              than shore-less countries. A special notation should go to
              Australia, who has a huge amount of low capacity solar plants in
              the east of the continent, but are compensating it with the Power
              Creek solar farm, which is the largest solar energy producer on
              the globe. There is a black hole lacking energy output in the
              north side of the globe, that seems to result from the lack of the
              conditions discussed in the above paragraph - having a cold
              climate, low amount of sunlight and smaller daytime. On the other
              hand, the country of Finland specifically, which is known for
              having a surprisingly great climate <em>although</em> it&#39;s
              geographical location, is the northest place in the world for a
              solar farm to appear.
            </p>
            <h4 class='code-line' data-line-start='42' data-line-end='43'>
              <a id='To_create_an_exact_profile_42'></a>
              <strong>To create an exact profile:</strong>
            </h4>
            <ul>
              <li class='has-line-data' data-line-start='43' data-line-end='44'>
                The countries with{' '}
                <strong>
                  <em>the highest</em>
                </strong>{' '}
                average solar energy production are tending to be usually Arab
                countries, with great access to heat and sunlight, located near
                the coast or in a country close to the coast.
              </li>
              <li class='has-line-data' data-line-start='44' data-line-end='45'>
                The countries with{' '}
                <strong>
                  <em>the lowest</em>
                </strong>{' '}
                average energy production are tending to be usually poor
                third-world countries, located far from shores, or in the north
                side of the globe.
              </li>
            </ul>
            <h3 class='code-line' data-line-start='45' data-line-end='46'>
              <a id='Conclusions_regarding_the_growth_in_the_amounts_of_solar_energy_production_45'></a>
              <strong>
                <em>
                  Conclusions regarding the growth in the amounts of solar
                  energy production:
                </em>
              </strong>
            </h3>
            <p class='has-line-data' data-line-start='46' data-line-end='48'>
              It seems like even though the solar farms market has started
              pretty low, it has gained popularity in the beginning of the last
              decade, around 2012-2013, while Asian countries have embraced the
              trend much faster than countries from all other regions, even
              though we could clearly see a huge drop in numbers of new solar
              farms since 2020, which could easily be explained by the
              Coronavirus pandemic global shutdown which has affected the entire
              world, that was probably the reason it was hard for business
              owners to open new farms. Asia has the highest growth rate around
              all regions, having at least 300 new solar facilities built over
              every year, up until the global shutdown in 2020, Asia tallied a
              total of 3461 solar farms in 2022. Meanwhile, we can see that
              although North America is the region that produces the lowest
              solar energy around the world, it actually ignored the shutdown in
              2020 and has started to rapidly grow in amounts. The region that
              has the lowest amount of solar farms in 2022 is Central America
              and The Caribbeans with 42 farms, and it also has the lowest
              growth rate. The Middle East region currently has 64 solar plants
              in 2022.
            </p>
            <h3 class='code-line' data-line-start='48' data-line-end='49'>
              <a id='Conclusions_regarding_ownerships_in_the_solar_energy_market_48'></a>
              <strong>
                <em>
                  Conclusions regarding ownerships in the solar energy market:
                </em>
              </strong>
            </h3>
            <p class='has-line-data' data-line-start='49' data-line-end='50'>
              There seems to be a carte union in the global solar energy market,
              as while there are 3453 recorded ownerships of solar farms
              globally, only 112 companies out of them own more than 10 farms,
              and the top 4 owners each hold more than 62 farms each. The
              company that controls the biggest share of the solar market is the
              NextEra Energy company with an owned quantity of 140 solar farms.
            </p>
            <h2
              className='conclusion__subtitle'
              data-line-start='50'
              data-line-end='51'
            >
              <a id='53_Final_words_50'></a>5.3 Final words
            </h2>
            <p class='has-line-data' data-line-start='51' data-line-end='52'>
              While there might&#39;ve been a slowdown in the past 2 years
              because of the global pandemic, the future is looking bright and
              sunny, as more and more counties are starting to invest in solar
              energy as an alternate main energy resource in preparation for the
              eradication petrol, while the leaders of the revolution are Asian,
              Middle Eastern and African countries and the NextEra company,
              along with the rest of the solar farms investors. As when the
              growth rate will return to it&#39;s normal self, in a few years we
              might be using the sun as our main energy source and make the
              Earth greener.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
