import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Slider {...settings}>
      <div className='slide'>
        <article className='slide__slogen'>
          <h1>Respect for our land and traditions.</h1>
        </article>
        <img
          className='slide__img'
          src='https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='a landscape view with sun rising up'
        />
      </div>
      <div className='slide'>
        <article className='slide__slogen'>
          <h1>Empowering future with solar energy.</h1>
        </article>
        <img
          className='slide__img'
          src='https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
          alt='an birdeye view of a landfill solar project'
        />
      </div>

      <div className='slide'>
        <article className='slide__slogen'>
          <h1>Our bright ideas come from the sun.</h1>
        </article>
        <img
          className='slide__img'
          src='https://images.unsplash.com/photo-1616181901157-3e403a88884d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='three girls playing on the green grass with sunshine spreading on them '
        />
      </div>
      <div className='slide'>
        <article className='slide__slogen'>
          <h1>Powering our way of life.</h1>
        </article>
        <img
          className='slide__img'
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt='young people sitting and working togther on their computers'
        />
      </div>
    </Slider>
  )
}
