import { useInView } from 'react-intersection-observer'

export default function AboutUs() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className='section about' id='about'>
      <h1 className='about__title'>Who are we?</h1>
      <h2 className='about__subtitle'>
        We are passionate{' '}
        <span className='about__profession'>data anaylyst</span> and{' '}
        <span className='about__profession'>web developer</span> who are ready
        to enpower the world just like solar.
      </h2>
      <div className='grid'>
        <div className='about__lior'>
          <h2
            className={`about__subtitle ${
              inView ? 'animation__moveInLeft' : null
            } }`}
          >
            Lior Leiba
          </h2>

          <p
            className={`about__text ${
              inView ? 'animation__moveInLeft' : null
            } }`}
          >
            Lior is a Data Analysis student in Practicum and is currently work
            in value sales at the wines &amp; spirits sector and living life in
            Haifa/Israel. He's also got a good background in mechanical
            engineering from my military service and in finances as well.
          </p>
        </div>
        <div className='about__karen'>
          <h2
            className={`about__subtitle ${
              inView ? 'animation__moveInRight' : null
            } }`}
          >
            Qiuhan Zhou
          </h2>

          <p
            className={`about__text ${
              inView ? 'animation__moveInRight' : null
            } }`}
          >
            Qiuhan is a web development student and
          </p>
        </div>
      </div>
    </section>
  )
}
