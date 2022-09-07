import { useInView } from 'react-intersection-observer'

export default function Conclusion() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className='section conclusion' id='conclusion'>
      <div className='conclusion__container'>
        <h2
          className={`conclusion__title ${
            inView ? 'animation__moveInLeft' : null
          } }`}
        >
          Know the places your online pals come from a little better
        </h2>

        <p
          className={`conclusion__text ${
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
