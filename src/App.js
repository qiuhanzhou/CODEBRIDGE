import Navigation from './Components/Navigation'
import SimpleSlider from './Components/SimpleSlide'
import Intro from './Components/Intro'
import AboutUs from './Components/AboutUs'
import Description from './Components/Description'
import Results from './Components/Results'
import Conclusion from './Components/Conclusion'
import Counter from './Components/Counter'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <SimpleSlider />
      <Counter></Counter>
      <Intro />
      <Description />
      <Results />
      <Conclusion />
      <AboutUs />

      <ScrollToTop smooth color='#6f00ff' />
    </div>
  )
}
