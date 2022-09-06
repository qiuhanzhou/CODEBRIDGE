export default function NavaigationItem({ navigationItem, onClick }) {
  //destructure the variable inside category object to be received
  const { id, name, sectionLink } = navigationItem

  return (
    <li className='navigation__item'>
      <a
        href={`#${sectionLink}`}
        className='navigation__link'
        onClick={onClick}
      >
        <span>{id}</span>
        {name}
      </a>
    </li>
  )
}
