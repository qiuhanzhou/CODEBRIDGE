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
          Know the places your online pals come from a little better
        </h2>

        <p
          className={`description__text ${
            inView ? 'animation__moveInRight' : null
          } }`}
        >
          The town of Practicum has brought together professionals from
          different corners of the world. Today, Practicum Art Gallery is proud
          to present stories and pictures from some of the people who dedicate
          their time and effort to making the future tech professionals of this
          town feel at home. Each of us has a unique story about the place we
          come from. Feel free to add your own story and a piece of visual art
          dedicated to your hometown to our collection. No matter where you're
          from, we're glad that you're our neighbor.
        </p>
      </div>
    </section>
  )
}
