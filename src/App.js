import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import { Fragment, useEffect, useState } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'
import { ProductContext } from './context/products.context'
import SimpleSlider from './Components/SimpleSlide'

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <SimpleSlider />
    </div>
  )
}
