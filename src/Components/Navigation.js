import NavigationItem from './NavigationItem'
import { useRef, useState } from 'react'

export default function Navigation() {
  const inputRef = useRef()

  const navigationItems = [
    { id: 1, name: 'Introduction: Problem overview', sectionLink: 'intro' },
    {
      id: 2,
      name: 'Introduction to the data',
      sectionLink: 'description',
    },
    { id: 3, name: 'Data analysis result', sectionLink: 'results' },
    { id: 4, name: 'Data analysis conclusion', sectionLink: 'conclusion' },
    { id: 5, name: 'About Us', sectionLink: 'about' },
  ]

  function close() {
    inputRef.current.checked = false
  }

  return (
    <div className=' navigation'>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navi-toggle'
        ref={inputRef}
      />
      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className='navigation__background'>&nbsp;</div>

      <nav className='navigation__nav '>
        <ul className='navigation__list'>
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              navigationItem={item}
              onClick={close}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}
