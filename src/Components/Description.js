import { useInView } from 'react-intersection-observer'

export default function Description() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className='section description' id='description'>
      <div className='description__container'>
        <h2
          className={`description__title ${
            inView ? 'animation__moveInLeft' : null
          } }`}
        >
          Introduction to the data
        </h2>

        <article
          className={`description__subtitle ${
            inView ? 'animation__moveInRight' : null
          } }`}
        >
          <div
            id='preview1'
            className='g-b g-b--t1of2 split split-preview description__preview'
          >
            <div
              id='preview'
              className='preview-html'
              preview=''
              debounce='150'
            >
              <p
                className='has-line-data'
                data-line-start='2'
                data-line-end='3'
              >
                At the current section, we&#39;ll study the data from the
                &#39;About&#39; section of the xlsx file we imported the data
                from.
              </p>
              <p
                className='has-line-data'
                data-line-start='4'
                data-line-end='5'
              >
                <strong>
                  <em>A&#41; Columns coverage</em>
                </strong>
              </p>
              <p
                className='has-line-data'
                data-line-start='6'
                data-line-end='7'
              >
                The raw data contains the following columns:
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='7'
                  data-line-end='9'
                >
                  <p
                    className='has-line-data'
                    data-line-start='7'
                    data-line-end='8'
                  >
                    <strong>
                      <code>Country</code>
                    </strong>{' '}
                    - Country the project is located in (Unabbreviated&#41;
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='9'
                  data-line-end='11'
                >
                  <p
                    className='has-line-data'
                    data-line-start='9'
                    data-line-end='10'
                  >
                    <strong>
                      <code>Project Name</code>
                    </strong>{' '}
                    - Commonly used name.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='11'
                  data-line-end='13'
                >
                  <p
                    className='has-line-data'
                    data-line-start='11'
                    data-line-end='12'
                  >
                    <strong>
                      <code>Phase name</code>
                    </strong>{' '}
                    - Common name of the project phase.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='13'
                  data-line-end='15'
                >
                  <p
                    className='has-line-data'
                    data-line-start='13'
                    data-line-end='14'
                  >
                    <strong>
                      <code>Project Name in Local Language / Script</code>
                    </strong>{' '}
                    - Commonly used name in the locally used script.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='15'
                  data-line-end='17'
                >
                  <p
                    className='has-line-data'
                    data-line-start='15'
                    data-line-end='16'
                  >
                    <strong>
                      <code>Other plant names</code>
                    </strong>{' '}
                    - Alternative names, including the name in local script.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='17'
                  data-line-end='20'
                >
                  <p
                    className='has-line-data'
                    data-line-start='17'
                    data-line-end='18'
                  >
                    <strong>
                      <code>Capacity</code> &#40;MW&#41;
                    </strong>{' '}
                    - Nameplate capacity, or best available data, of the phase
                    in megawatts rounded to whole number.
                  </p>
                  <ul>
                    <li
                      className='has-line-data'
                      data-line-start='18'
                      data-line-end='20'
                    >
                      <strong>Additional Note:</strong> Solar farm capacity
                      cut-off, Arab Countries: &lt;10 MW not included; Rest of
                      world: &lt;20 MW not included
                    </li>
                  </ul>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='20'
                  data-line-end='22'
                >
                  <p
                    className='has-line-data'
                    data-line-start='20'
                    data-line-end='21'
                  >
                    <strong>
                      <code>Capacity Rating</code> &#40;MWac, MWp/dc,
                      unknown&#41;
                    </strong>{' '}
                    - The reported capacity rating, unknown selected if not
                    provided.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='22'
                  data-line-end='24'
                >
                  <p
                    className='has-line-data'
                    data-line-start='22'
                    data-line-end='23'
                  >
                    <strong>
                      <code>Status</code>
                    </strong>{' '}
                    - <em>see section below</em>.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='24'
                  data-line-end='26'
                >
                  <p
                    className='has-line-data'
                    data-line-start='24'
                    data-line-end='25'
                  >
                    <strong>
                      <code>Start year</code>
                    </strong>{' '}
                    - Year the project is or is expected to be commissioned.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='26'
                  data-line-end='28'
                >
                  <p
                    className='has-line-data'
                    data-line-start='26'
                    data-line-end='27'
                  >
                    <strong>
                      <code>Retired year</code>
                    </strong>{' '}
                    - Year the plant is taken offline.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='28'
                  data-line-end='30'
                >
                  <p
                    className='has-line-data'
                    data-line-start='28'
                    data-line-end='29'
                  >
                    <strong>
                      <code>Operator</code>
                    </strong>{' '}
                    - The company that operates the project.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='30'
                  data-line-end='32'
                >
                  <p
                    className='has-line-data'
                    data-line-start='30'
                    data-line-end='31'
                  >
                    <strong>
                      <code>Operator Name in Local Language / Script</code>
                    </strong>{' '}
                    - Company name that operates the project in the locally used
                    script.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='32'
                  data-line-end='34'
                >
                  <p
                    className='has-line-data'
                    data-line-start='32'
                    data-line-end='33'
                  >
                    <strong>
                      <code>Owner</code>
                    </strong>{' '}
                    - The company that directly owns the plant; When owned by a
                    special purpose vehicle, the next level of ownership is
                    provided.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='34'
                  data-line-end='36'
                >
                  <p
                    className='has-line-data'
                    data-line-start='34'
                    data-line-end='35'
                  >
                    <strong>
                      <code>Owner Name in Local Language / Script</code>
                    </strong>{' '}
                    - Company name that directly owns the project in the locally
                    used script.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='36'
                  data-line-end='38'
                >
                  <p
                    className='has-line-data'
                    data-line-start='36'
                    data-line-end='37'
                  >
                    <strong>
                      <code>Latitude</code> &#40;decimal degrees&#41;
                    </strong>{' '}
                    - Latitude, assumed WGS84 &#40;google maps&#41;, of the
                    project &#40;not by unit&#41;.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='38'
                  data-line-end='40'
                >
                  <p
                    className='has-line-data'
                    data-line-start='38'
                    data-line-end='39'
                  >
                    <strong>
                      <code>Longitude</code> &#40;decimal degrees&#41;
                    </strong>{' '}
                    - Longitude, assumed WGS84 &#40;google maps&#41;, of the
                    project &#40;not by unit&#41;.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='40'
                  data-line-end='42'
                >
                  <p
                    className='has-line-data'
                    data-line-start='40'
                    data-line-end='41'
                  >
                    <strong>
                      <code>Location accuracy</code> &#40;approximate,
                      exact&#41;
                    </strong>{' '}
                    - Location is Approximate based on using nearest city or
                    other information in data sources, or Location is Exact when
                    explicitly provided in data source.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='42'
                  data-line-end='44'
                >
                  <p
                    className='has-line-data'
                    data-line-start='42'
                    data-line-end='43'
                  >
                    <strong>
                      <code>City</code>
                    </strong>{' '}
                    - City, town, village, or township &#40;China&#41; where
                    project is located.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='44'
                  data-line-end='46'
                >
                  <p
                    className='has-line-data'
                    data-line-start='44'
                    data-line-end='45'
                  >
                    <strong>
                      <code>Local Area</code>
                    </strong>{' '}
                    - County, taluk, or district &#40;China&#41; where project
                    is located .
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='46'
                  data-line-end='48'
                >
                  <p
                    className='has-line-data'
                    data-line-start='46'
                    data-line-end='47'
                  >
                    <strong>
                      <code>Major Area</code>
                    </strong>{' '}
                    - Prefecture, district, or municipality &#40;China&#41;
                    where project is located.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='48'
                  data-line-end='50'
                >
                  <p
                    className='has-line-data'
                    data-line-start='48'
                    data-line-end='49'
                  >
                    <strong>
                      <code>State/Province</code>
                    </strong>{' '}
                    - Subnational unit where project is located.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='50'
                  data-line-end='52'
                >
                  <p
                    className='has-line-data'
                    data-line-start='50'
                    data-line-end='51'
                  >
                    <strong>
                      <code>Region</code>
                    </strong>{' '}
                    - Region location based on IRENA definition.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='52'
                  data-line-end='54'
                >
                  <p
                    className='has-line-data'
                    data-line-start='52'
                    data-line-end='53'
                  >
                    <strong>
                      <code>GEM Location ID</code> &#40;L8+5 digits&#41;
                    </strong>{' '}
                    - GEM generated ID unique for each project.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='54'
                  data-line-end='56'
                >
                  <p
                    className='has-line-data'
                    data-line-start='54'
                    data-line-end='55'
                  >
                    <strong>
                      <code>GEM Phase ID</code> &#40;G8+5 digits&#41;
                    </strong>{' '}
                    - GEM generated ID unique for each phase.
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='56'
                  data-line-end='58'
                >
                  <p
                    className='has-line-data'
                    data-line-start='56'
                    data-line-end='57'
                  >
                    <code>Other IDs &#40;location&#41;</code>
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='58'
                  data-line-end='60'
                >
                  <p
                    className='has-line-data'
                    data-line-start='58'
                    data-line-end='59'
                  >
                    <code>Other IDs &#40;unit/phase&#41;</code>
                  </p>
                </li>
                <li
                  className='has-line-data'
                  data-line-start='60'
                  data-line-end='61'
                >
                  <p
                    className='has-line-data'
                    data-line-start='60'
                    data-line-end='61'
                  >
                    <strong>
                      <code>Wiki URL</code>
                    </strong>{' '}
                    - URL of existing or planned GEM.wiki page.
                  </p>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='63'
                data-line-end='64'
              >
                <strong>
                  <em>
                    B&#41; Regarding the <code>Status</code> column - these are
                    the definitions of each project&#39;s status:
                  </em>
                </strong>
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='65'
                  data-line-end='67'
                >
                  <strong>
                    <em>The &#39;operating&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='67'
                data-line-end='68'
              >
                Commercial operation date achieved.
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='69'
                  data-line-end='71'
                >
                  <strong>
                    <em>The &#39;construction&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='71'
                data-line-end='72'
              >
                Equipment installation has begun &#40;not just
                clearing/roads&#41;
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='73'
                  data-line-end='75'
                >
                  <strong>
                    <em>The &#39;development&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='75'
                data-line-end='76'
              >
                Projects that are actively moving forward in seeking
                governmental approvals, land rights, or financing.
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='77'
                  data-line-end='79'
                >
                  <strong>
                    <em>The &#39;announced&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='79'
                data-line-end='80'
              >
                Projects that been publicly reported but have not yet moved
                actively forward by applying for permits or seeking land,
                material, or financing. Examples: &#40;1&#41; projects are the
                potential “Phase 2” at a location where “Phase 1” is currently
                under development, &#40;2&#41; Projects that are described in
                long-range company or governmental planning documents.
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='81'
                  data-line-end='83'
                >
                  <strong>
                    <em>The &#39;shelved&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='83'
                data-line-end='84'
              >
                Suspension announced, or 2 years with no published updates
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='85'
                  data-line-end='87'
                >
                  <strong>
                    <em>The &#39;mothballed&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='87'
                data-line-end='88'
              >
                Disused but not dismantled
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='89'
                  data-line-end='91'
                >
                  <strong>
                    <em>The &#39;retired&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='91'
                data-line-end='92'
              >
                Dismantled
              </p>
              <ul>
                <li
                  className='has-line-data'
                  data-line-start='93'
                  data-line-end='95'
                >
                  <strong>
                    <em>The &#39;cancelled&#39; status:</em>
                  </strong>
                </li>
              </ul>
              <p
                className='has-line-data'
                data-line-start='95'
                data-line-end='96'
              >
                Cancellation announced, or 4 years with no published updates
              </p>
              <p
                className='has-line-data'
                data-line-start='97'
                data-line-end='98'
              >
                <strong>
                  <em>
                    C&#41; A note regarding the solar farms capacity cutoff
                    voltage
                  </em>
                </strong>
              </p>
              <p
                className='has-line-data'
                data-line-start='99'
                data-line-end='100'
              >
                The capacity cutoff voltages values &#40;the minimum
                voltage&#41; in{' '}
                <strong>Arab countries is any capacity under 10 MWs</strong>,
                while{' '}
                <strong>
                  the rest of the world cutoff voltage capacity is under 20 MWs
                </strong>
                .
              </p>
              <p
                className='has-line-data'
                data-line-start='101'
                data-line-end='102'
              >
                <strong>
                  <em>The next steps will be thus:</em>
                </strong>
              </p>
              <ol>
                <li
                  className='has-line-data'
                  data-line-start='102'
                  data-line-end='103'
                >
                  We&#39;ll explore the initial data in order to find defects,
                  missing values, duplicates etc. Since we already know the
                  columns are al capitalized, these will be transformed in the
                  Data Preprocessing section.
                </li>
                <li data-line-start='103' data-line-end='104'>
                  We&#39;ll preprocess all the data to fix all possible problems
                  we will find during the Data Exploration section.
                </li>
                <li data-line-start='104' data-line-end='105'>
                  Analysis: We&#39;ll visualize the data in order to analyze the
                  energy output, average output, etc.
                </li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
