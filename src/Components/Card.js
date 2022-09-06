import { useEffect, useRef } from 'react'

export default function Card({ card }) {
  const spanRef = useRef()

  let nIntervId

  function animateCounter(num) {
    console.log('animateCounter')
    let count = 0
    const countTo = num

    if (!nIntervId) {
      nIntervId = setInterval(changeCount, 8)
    }

    function changeCount() {
      if (count < countTo) {
        count++
        spanRef.current.textContent = count
      } else {
        clearInterval(nIntervId)
        // release our intervalID from the variable
        nIntervId = null
      }
    }
  }

  useEffect(() => {
    animateCounter(card.number)
  }, [])

  return (
    <li className={`card animation__moveInLeft`}>
      <img className='card__image' src={card.link} alt={card.description} />
      <p className='card__count-container'>
        <span ref={spanRef} className='card__count-number ' />
        <span className='count-unit'>{card.unit}</span>
      </p>
      <p className='card__info'>{card.description}</p>
    </li>
  )
}
